import { InputText } from "@/components/InputText";
import { useAuth, useSignUp } from "@clerk/expo";
import { BlurView } from "expo-blur";
import { Href, Link, useRouter } from "expo-router";
import React from "react";
import { Modal, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Register() {
  const { signUp, errors, fetchStatus } = useSignUp();
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const [userName, setUserName] = React.useState("");
  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [code, setCode] = React.useState("");
  const [openVerificationModal, setOpenVerificationModal] =
    React.useState(false);

  async function handleSubmit() {
    const { error } = await signUp.password({
      emailAddress,
      password,
    });
    if (error) {
      console.error(JSON.stringify(error, null, 2));
      return;
    }

    if (!error) await signUp.verifications.sendEmailCode();
    setOpenVerificationModal(true);
  }

  async function handleVerify() {
    const { error } = await signUp.verifications.verifyEmailCode({
      code,
    });
    console.log("Verification result:", {
      error,
      signUp,
      signUpStatus: signUp.status,
      missingFields: signUp.missingFields,
      unverifiedFields: signUp.unverifiedFields,
      requiredFields: signUp.requiredFields,
    });
    if (signUp.status === "complete") {
      await signUp.finalize({
        navigate: ({ session, decorateUrl }) => {
          if (session.currentTask) {
            console.log(session?.currentTask);
            return;
          }

          const url = decorateUrl("/(tabs)");
          router.replace(url as Href);
        },
      });
    } else {
      console.error("Sign-up attempt not complete:", signUp);
    }
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-center items-center px-6 gap-2">
        <Text className="text-orange-600 text-4xl font-bold">
          Debate The Topic
        </Text>

        <Text className="text-2xl text-gray-500 mb-6">
          Join the conversation
        </Text>

        {/* adjust these to match your InputText prop types */}
        <InputText
          label="Username"
          type="PlainText"
          placeholder="Choose a username"
          handleInputChange={setUserName}
        />
        <InputText
          label="Email"
          type="email"
          handleInputChange={setEmailAddress}
        />
        <InputText
          label="Password"
          type="password"
          handleInputChange={setPassword}
        />
        <Pressable
          onPress={handleSubmit}
          //onPress={() => router.replace("/(tabs)")}
          className="flex justify-center items-center rounded-xl bg-orange-600 px-4 py-2 w-3/4 h-12 mt-6 mb-2"
        >
          <Text className="text-white text-xl font-bold">Create Account</Text>
        </Pressable>
        <Text>
          Don't have an account?{" "}
          <Link className="text-orange-600 font-bold" href={"/login"}>
            Sign in
          </Link>
        </Text>
        <Modal
          visible={openVerificationModal}
          transparent={true}
          animationType={"fade"}
        >
          <BlurView intensity={2} className="w-full h-full">
            <View className="m-auto w-3/4 h-[250] rounded-xl bg-white border">
              <View className="flex-1 justify-center items-center px-6">
                <Text className="text-2xl mb-8 font-bold">
                  Enter the verification code sent to your email
                </Text>
                <InputText
                  label="Verification Code"
                  type="PlainText"
                  placeholder="Enter code"
                  handleInputChange={setCode}
                />
                <Text>{code}</Text>
                <Pressable
                  onPress={handleVerify}
                  className="flex justify-center items-center rounded-xl bg-orange-600 px-4 py-2 w-3/4 h-12 mt-6 mb-2"
                >
                  <Text className="text-white text-xl font-bold">Verify</Text>
                </Pressable>
              </View>
            </View>
          </BlurView>
        </Modal>
      </View>
    </SafeAreaView>
  );
}
