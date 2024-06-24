import { Avatar, Box, Center, FormControl, HStack, Icon, Input, InputField, InputIcon, InputSlot, Link, MailIcon, ScrollView, SearchIcon, Text } from "@gluestack-ui/themed";
import { BellIcon, CircleDollarSignIcon, CreditCardIcon, CurrencyIcon, FormInput, SendIcon, ServerIcon, User2Icon, UtilityPoleIcon, WalletCardsIcon } from "lucide-react-native";
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
    <Box  backgroundColor="$green">
      <ScrollView
        style={{ height: "100%" }}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <HStack mt={16} justifyContent="space-between">
          <Avatar mx={8} mt={12} backgroundColor="$white">
            <Icon as={BellIcon} size="xl"/>
          </Avatar>

          <Text color="$white" size="5xl">Servio</Text>

          <Avatar mt={12} backgroundColor="$white"><Icon as={User2Icon} size="xl"/></Avatar>
        </HStack>

        <FormControl mt={50}>
          <Input rounded={"$lg"} mx={8} p={10}>
            <InputField placeholder="Search Servio" w={"$full"}/>

            <InputSlot>
              <InputIcon><Icon ml={4} as={SearchIcon}/></InputIcon>
            </InputSlot>
          </Input>
        </FormControl>

        <HStack flexWrap="wrap" space="md" mx={8} mt={30}>
          {servioList.map((item, key) => {
            return <Link href={ item.url }><Box rounded={"$lg"} h={140} w={190} backgroundColor="$white" justifyContent="center">
            <Center>
              { item.icon }
              <Text key={key} color="$black" fontSize={'$xl'}>{ item.name }</Text>
            </Center>
          </Box>
          </Link>
          })}
        </HStack>
      </ScrollView>
    </Box>
  );
}
