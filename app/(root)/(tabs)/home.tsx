import { useUser } from "@clerk/clerk-expo";
import { Link } from "expo-router";
import { ScrollView, Text, View } from "react-native";

const Home = () => {
  const { user } = useUser();

  return (
    <ScrollView className="flex-1 bg-white">
      <View>
        <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
        <Link href="/sign-in">
          <Text> Home here :Sign In</Text>
        </Link>
        <Link href="/sign-up">
          <Text>Sign Up</Text>
        </Link>
      </View>
    </ScrollView>
  );
};

export default Home;
