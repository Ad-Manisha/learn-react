import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/conf";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
  const { register, handleSubmit, watch, setValue, control, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        content: post?.content || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id;
        data.featuredImage = fileId;
        console.log("userData:", userData);
        if (!userData || !userData.$id) {
          alert("Please log in to create a post.");
          return;
        }

        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string")
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");

    return "";
  }, []);

  React.useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });

    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="max-w-6xl mx-auto mt-10 bg-gradient-to-br from-pink-200 via-pink-250 to-indigo-300 rounded-3xl shadow-2xl p-10 flex flex-col md:flex-row gap-10"
    >
      {/* LEFT COLUMN */}
      <div className="md:w-2/3 w-full space-y-6">
        <div>
          <label className="block text-sm font-medium text-indigo-800 mb-1">
            Title:
          </label>
          <Input
            placeholder="Enter title"
            className="w-full px-4 py-2 bg-white text-gray-800 border border-indigo-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("title", { required: true })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-indigo-800 mb-1">
            Slug:
          </label>
          <Input
            placeholder="Auto-generated slug"
            className="w-full px-4 py-2 bg-white text-gray-800 border border-indigo-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("slug", { required: true })}
            onInput={(e) => {
              setValue("slug", slugTransform(e.currentTarget.value), {
                shouldValidate: true,
              });
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-indigo-800 mb-1">
            Content:
          </label>
          <RTE
            label="Content"
            name="content"
            control={control}
            defaultValue={getValues("content")}
          />
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="md:w-1/3 w-full space-y-6">
        <div>
          <label className="block text-sm font-medium text-indigo-800 mb-1">
            Featured Image:
          </label>
          <Input
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            className="w-full px-3 py-2 bg-white text-gray-800 border border-indigo-300 rounded-md shadow-md"
            {...register("image", { required: !post })}
          />
        </div>

        {post && (
          <div className="w-full">
            <img
              src={appwriteService.getFileView(post.featuredImage)}
              alt={post.title}
              className="w-full rounded-lg shadow-lg border border-indigo-200"
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-indigo-800 mb-1">
            Status:
          </label>
          <Select
            options={["active", "inactive"]}
            className="w-full px-4 py-2 bg-white text-gray-800 border border-indigo-300 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            {...register("status", { required: true })}
          />
        </div>

        <Button
          type="submit"
          bgColor="bg-gradient-to-r from-indigo-600 to-pink-500"
          className="w-full py-3 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:brightness-110 transition-all duration-300"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
