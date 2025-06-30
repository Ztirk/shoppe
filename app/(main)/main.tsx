import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text, Image, View, ScrollView } from "react-native";
import { Button, Chip } from "react-native-paper";
import { Link } from "expo-router";

function main() {
  return (
    <SafeAreaView className="bg-white h-full flex items-center">
      <ScrollView>
        <View className="flex gap-[15px]">
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row justify-between items-center gap-[15px]">
              <View className="h-[45px] aspect-square bg-white rounded-full flex items-center justify-center shadow-[0_5px_4px_rgba(0,0,0,1)]">
                <Image
                  className="h-[40px] aspect-square"
                  source={require("@/assets/images/userPicture/1.png")}
                />
              </View>
              <Button
                mode="contained"
                style={{ height: 35, width: 115, borderRadius: 999 }}
                labelStyle={{ fontSize: 14 }}
              >
                My Activity
              </Button>
            </View>
            <View className="flex flex-row justify-center items-center gap-[11px]">
              <View className="h-[35px] aspect-square bg-[#F8F8F8] rounded-full flex items-center justify-center">
                <Image
                  className="h-[16px] w-[17px]"
                  source={require("@/assets/images/image1.png")}
                />
              </View>
              <View className="h-[35px] aspect-square bg-[#F8F8F8] rounded-full flex items-center justify-center">
                <Image
                  className="h-[6px] w-[11px]"
                  source={require("@/assets/images/image2.png")}
                />
              </View>
              <View className="h-[35px] aspect-square bg-[#F8F8F8] rounded-full flex items-center justify-center">
                <Image
                  className="h-[16px] w-[15.92px]"
                  source={require("@/assets/images/image3.png")}
                />
              </View>
            </View>
          </View>
          <Text className="text-[28px] font-['Raleway-Bold']">
            Hello, Romina!
          </Text>
          <View className="bg-[#F8F8F8] py-[10px] px-[14px] w-[335px] h-[70px] rounded-[5px] flex flex-row items-center justify-between">
            <View>
              <Text className="text-[14px] font-['Raleway-Bold']">
                Announcement
              </Text>
              <Text className="text-[10px] font-['Raleway-Regular']">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Maecenas hendrerit luctus libero ac vulputate.
              </Text>
            </View>
            <View className="flex items-center justify-center h-[30px] aspect-square bg-[#004CFF] rounded-full">
              <Link href={"/createAccount"}>
                <Image
                  className="h-[11px] w-[14px] aspect-square"
                  source={require("@/assets/images/arrow-right.png")}
                />
              </Link>
            </View>
          </View>
          <Text className="text-[21px] font-['Raleway-Bold']">
            Recently viewed
          </Text>
          <View className="flex flex-row gap-[10px]">
            <View className="h-[60px] aspect-square bg-white rounded-full flex items-center justify-center shadow-[0_5px_4px_rgba(0,0,0,1)]">
              <Image
                className="h-[50px] aspect-square"
                source={require("@/assets/images/userPicture/2.png")}
              />
            </View>
            <View className="h-[60px] aspect-square bg-white rounded-full flex items-center justify-center shadow-[0_5px_4px_rgba(0,0,0,1)]">
              <Image
                className="h-[50px] aspect-square"
                source={require("@/assets/images/userPicture/3.png")}
              />
            </View>
            <View className="h-[60px] aspect-square bg-white rounded-full flex items-center justify-center shadow-[0_5px_4px_rgba(0,0,0,1)]">
              <Image
                className="h-[50px] aspect-square"
                source={require("@/assets/images/userPicture/4.png")}
              />
            </View>
            <View className="h-[60px] aspect-square bg-white rounded-full flex items-center justify-center shadow-[0_5px_4px_rgba(0,0,0,1)]">
              <Image
                className="h-[50px] aspect-square"
                source={require("@/assets/images/userPicture/5.png")}
              />
            </View>
            <View className="h-[60px] aspect-square bg-white rounded-full flex items-center justify-center shadow-[0_5px_4px_rgba(0,0,0,1)]">
              <Image
                className="h-[50px] aspect-square"
                source={require("@/assets/images/userPicture/6.png")}
              />
            </View>
          </View>
          <Text className="text-[21px] font-['Raleway-Bold']">My Orders</Text>
          <View className="flex flex-row gap-[8px]">
            <Chip
              mode="flat"
              style={{ backgroundColor: "#E5EBFC" }}
              textStyle={{ color: "#0042E0" }}
            >
              To Pay
            </Chip>
            <Chip
              mode="flat"
              style={{ backgroundColor: "#E5EBFC" }}
              textStyle={{ color: "#0042E0" }}
            >
              To Receive
            </Chip>
            <Chip
              mode="flat"
              style={{ backgroundColor: "#E5EBFC" }}
              textStyle={{ color: "#0042E0" }}
            >
              To Review
            </Chip>
          </View>
          <Text className="text-[21px] font-['Raleway-Bold']">Stories</Text>
          <View className="flex flex-row gap-[6px] w-[335px]">
            <ScrollView horizontal>
              <Image
                className="h-[175px] w-[104px]"
                source={require("@/assets/images/image4.png")}
              />

              <Image
                className="h-[175px] w-[104px]"
                source={require("@/assets/images/image5.png")}
              />

              <Image
                className="h-[175px] w-[104px]"
                source={require("@/assets/images/image6.png")}
              />

              <Image
                className="h-[175px] w-[104px]"
                source={require("@/assets/images/image7.png")}
              />
            </ScrollView>
          </View>

          <Text className="text-[21px] font-['Raleway-Bold']">New Items</Text>
          <View className="flex flex-row gap-[6px] w-[335px]">
            <ScrollView horizontal>
              <View className="w-[140px]">
                <View className="h-[140px] w-[140px] bg-white shadow-[0_2px_1px_rgba(0,0,0,1)] rounded flex items-center justify-center">
                  <Image
                    className="h-[130px] w-[130px]"
                    source={require("@/assets/images/image15.png")}
                  />
                </View>
                <Text>Lorem ipsum dolor sit amet consectetur.</Text>
                <Text>$17,00</Text>
              </View>

              <View className="w-[140px]">
                <View className="h-[140px] w-[140px] bg-white shadow-[0_2px_1px_rgba(0,0,0,1)] rounded flex items-center justify-center">
                  <Image
                    className="h-[130px] w-[130px]"
                    source={require("@/assets/images/image47.png")}
                  />
                </View>
                <Text>Lorem ipsum dolor sit amet consectetur.</Text>
                <Text>$32,00</Text>
              </View>

              <View className="w-[140px]">
                <View className="h-[140px] w-[140px] bg-white shadow-[0_2px_1px_rgba(0,0,0,1)] rounded flex items-center justify-center">
                  <Image
                    className="h-[130px] w-[130px]"
                    source={require("@/assets/images/image48.png")}
                  />
                </View>
                <Text>Lorem ipsum dolor sit amet consectetur.</Text>
                <Text>$21,00</Text>
              </View>
            </ScrollView>
          </View>

          <Text className="text-[21px] font-['Raleway-Bold']">Categories</Text>
          <View className="flex flex-row gap-[6px] w-[335px]">
            <View className="h-[192px] w-[165px] bg-white shadow-[0_2px_1px_rgba(0,0,0,1)] rounded flex items-center justify-center">
              <View className="flex flex-row gap-[5px]">
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image23.png")}
                />
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image24.png")}
                />
              </View>

              <View className="flex flex-row gap-[5px]">
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image25.png")}
                />
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image26.png")}
                />
              </View>

              <View className=" w-[150px] flex flex-row justify-between">
                <Text>Clothing</Text>
                <Text>109</Text>
              </View>
            </View>
            <View className="h-[192px] w-[165px] bg-white shadow-[0_2px_1px_rgba(0,0,0,1)] rounded flex items-center justify-center">
              <View className="flex flex-row gap-[5px]">
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image23.png")}
                />
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image24.png")}
                />
              </View>

              <View className="flex flex-row gap-[5px]">
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image25.png")}
                />
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image26.png")}
                />
              </View>

              <View className=" w-[150px] flex flex-row justify-between">
                <Text>Clothing</Text>
                <Text>109</Text>
              </View>
            </View>
          </View>
          <View className="flex flex-row gap-[6px] w-[335px]">
            <View className="h-[192px] w-[165px] bg-white shadow-[0_2px_1px_rgba(0,0,0,1)] rounded flex items-center justify-center">
              <View className="flex flex-row gap-[5px]">
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image23.png")}
                />
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image24.png")}
                />
              </View>

              <View className="flex flex-row gap-[5px]">
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image25.png")}
                />
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image26.png")}
                />
              </View>

              <View className=" w-[150px] flex flex-row justify-between">
                <Text>Clothing</Text>
                <Text>109</Text>
              </View>
            </View>
            <View className="h-[192px] w-[165px] bg-white shadow-[0_2px_1px_rgba(0,0,0,1)] rounded flex items-center justify-center">
              <View className="flex flex-row gap-[5px]">
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image23.png")}
                />
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image24.png")}
                />
              </View>

              <View className="flex flex-row gap-[5px]">
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image25.png")}
                />
                <Image
                  className="w-[75px] aspect-square"
                  source={require("@/assets/images/image26.png")}
                />
              </View>

              <View className=" w-[150px] flex flex-row justify-between">
                <Text>Clothing</Text>
                <Text>109</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default main;
