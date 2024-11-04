//
import React from "react";
import { Link } from "expo-router";
import { Text, View } from "react-native";
//
export default function Page() {
  return (
    <View className="flex flex-1 gap-5 bg-background items-center">
      <View className="w-[100%] h-[23%] bg-primary "></View>
      <View className="w-[99%] h-[7%] rounded-md bg-card "></View>
      <View className="w-[99%] h-[7%] rounded-md bg-card "></View>
      <View className="w-[99%] h-[50%] rounded-md bg-card p-3 ">
        <Text className="text-foreground text-xl">Hello world</Text>
      </View>
      {/* <View className="w-[95%] h-[7%] rounded-md bg-card border-b border-border "></View> */}
    </View>
  );
}
