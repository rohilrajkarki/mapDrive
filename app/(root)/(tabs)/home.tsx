import { useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const { user } = useUser();

  return (
    <SafeAreaView>
      <View>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Link href="/sign-in">
          <Text> Home here :Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </View>
    </SafeAreaView>
  );
};

export default Home;
