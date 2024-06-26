import { Avatar, Box, Center, FormControl, HStack, Heading, Icon, Input, InputField, InputIcon, InputSlot, Link, MailIcon, Pressable, ScrollView, SearchIcon, Text } from "@gluestack-ui/themed";
import { BellIcon, CircleDollarSignIcon, CreditCardIcon, CurrencyIcon, FormInput, SendIcon, ServerIcon, UmbrellaIcon, User2Icon, UtilityPoleIcon, WalletCardsIcon } from "lucide-react-native";
import { ReactElement } from "react";

interface ServioProps {
  icon: ReactElement;
  name: string;
  url: string;
}

const servioList:ServioProps[] = [
  {
    icon: <Icon as={CreditCardIcon} size="xl"/>,
    name: 'Send Money',
    url: '/money'
  },

  {
    icon: <Icon as={WalletCardsIcon} size="xl"/>,
    name: 'Airtime', 
    url: '/airtime'
  },

  {
    icon: <Icon as={ServerIcon} size="xl"/>,
    name: 'Internet Data',
    url: '/data'
  },

  {
    icon: <Icon as={UtilityPoleIcon} size="xl"/>,
    name: 'Utility Bills',
    url: '/bills'
  },

  {
    icon: <Icon as={MailIcon} size="xl"/>,
    name: 'SMS and ',
    url: '/sms'
  },

  {
    icon: <Icon as={CircleDollarSignIcon} size="xl"/>,
    name: 'Convert',
    url: '/exchangerates'
  }
]

export default function Home({icon, name}: ServioProps) {
  return (
    <Box  backgroundColor="$green300">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <HStack mx={8} mt={32} justifyContent="space-between">
          <Avatar mt={22} backgroundColor="$white">
            <Icon as={BellIcon} size="xl"/>
          </Avatar>

          <Text mt={8} color="$black" size="5xl">Servio</Text>

          <Avatar mr={4} mt={20} backgroundColor="$white"><Icon as={User2Icon} size="xl"/></Avatar>
        </HStack>

        <FormControl mt={50}>
          <Input w={"95%"} borderColor="$black" rounded={"$lg"} mx={8} p={10}>
            <InputField placeholderTextColor={"$black"} placeholder="Search Servio" w={"$full"}/>

            <InputSlot>
              <InputIcon><Icon as={SearchIcon}/></InputIcon>
            </InputSlot>
          </Input>
        </FormControl>

        <HStack flexWrap="wrap" space="md" mx={8} mt={30}>
          {servioList.map((item, key) => {
            return <Link href={ item.url }>
              <Box rounded={"$lg"} h={140} w={190} backgroundColor="$white" justifyContent="center">
                <Center>
                  { item.icon }
                  <Text color="$black" fontSize={'$xl'}>{ item.name }</Text>
                </Center>
              </Box>
          </Link>
          })}
        </HStack>

        <Box h={240} mx={8} mt={80} backgroundColor="$green200">
          <Center>
            <Avatar borderBlockColor="$black" backgroundColor="$white" h={120} w={120} overflow="visible">
              <Icon color="$blue" as={UmbrellaIcon} size="xl"/>
              <Text fontSize={"$2xl"}>Ask Me</Text>
            </Avatar>
          </Center>

          <Text mt={16} mx={8} size="xl">Your delivery location is set to</Text>
          <Heading mx={8}>Kwame Nkrumah University of Science and Technology</Heading>
        </Box>
      </ScrollView>
    </Box>
  );
}
