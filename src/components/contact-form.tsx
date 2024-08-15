import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "email is required.",
  }),
  message: z.string().min(10, {
    message: "message must be at least 10 characters.",
  }),
});

type FormType = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit = (values: FormType) => console.log(values);

  console.log({ errors });
  return (
    <section className="bg-neutral-900">
      <div className="mx-auto max-w-screen-md px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8">
          <div className="rounded-lg bg-app-dark p-8 shadow-lg  lg:p-12">
            <div className="lg:col-span-2 lg:py-12 py-5">
              <p className="max-w-xl text-2xl text-white">Contact Us</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">
                  Name
                </label>
                <input
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Name"
                  type="text"
                  id="name"
                  {...register("name")}
                />
                {errors.name && (
                  <div>
                    <span className="text-destructive text-xs">
                      {errors.name.message}
                    </span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1">
                <div>
                  <label className="sr-only" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Email address"
                    type="email"
                    id="email"
                    {...register("email")}
                  />
                  {errors.email && (
                    <div>
                      <span className="text-destructive text-xs">
                        {errors.email.message}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">
                  Message
                </label>

                <textarea
                  className="w-full rounded-lg border-gray-200 p-3 text-sm"
                  placeholder="Message"
                  rows={8}
                  id="message"
                  {...register("message")}
                ></textarea>
                {errors.message && (
                  <div>
                    <span className="text-destructive text-xs">
                      {errors.message.message}
                    </span>
                  </div>
                )}
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-full rounded-lg bg-white px-5 py-3 font-medium text-app-dark sm:w-auto"
                >
                  Send Enquiry
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
