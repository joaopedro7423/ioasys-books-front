import {
  Box,
  Flex,
  Text,
  chakra,
  FormControl,
  FormLabel,
  Input,
  Button,
  SimpleGrid,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <Flex
        w={"100%"}
        h={"100vh"}
        bgImage="./background/BgImage.jpg"
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
      >
        <Box mx={{ base: "auto", md: "20%" }} my="auto">
          <Text mb={5} fontSize={"3rem"} color="white" fontWeight={"bold"}>
            ioasys{" "}
            <chakra.span fontSize={"2,5rem"} fontWeight={"100"}>
              {" "}
              Books
            </chakra.span>
          </Text>
          <Box w={{ base: "120%", lg: "150%" }}>
            <FormControl borderRadius={4} bgColor="rgba(0, 0, 0, 0.32)">
              <FormLabel
                pt={2}
                m={0}
                ml={3}
                color={"white"}
                fontSize={"0.9rem"}
              >
                Email
              </FormLabel>
              <Input
                p={0}
                m={0}
                ml={3}
                color={"white"}
                boxDecorationBreak={"unset"}
                focusBorderColor="none"
                bg="none"
                border="none"
                type="email"
                placeholder="books@ioasys.com.br"
                _placeholder={{ color: "white" }}
              />
            </FormControl>

            <FormControl mt={6} borderRadius={4} bgColor="rgba(0, 0, 0, 0.32)">
              <Grid
                templateColumns={{
                  base: "repeat(5, 0.3fr)",
                  md: "repeat(5, 0.5fr)",
                }}
              >
                <GridItem colSpan={4}>
                  <FormLabel
                    pt={2}
                    m={0}
                    ml={3}
                    d="block"
                    color={"white"}
                    fontSize={"0.9rem"}
                  >
                    Senha
                  </FormLabel>

                  <Input
                    p={0}
                    m={0}
                    ml={3}
                    color={"white"}
                    boxDecorationBreak={"unset"}
                    focusBorderColor="none"
                    bg="none"
                    border="none"
                    type="password"
                    placeholder="••••••••••••"
                    _placeholder={{ color: "white" }}
                  />
                </GridItem>
                <GridItem m="auto" p={2} colSpan={1}>
                  <Button
                    p={5}
                    color="rgba(178, 46, 111, 1)"
                    m="auto"
                    borderRadius={"44px"}
                    type="submit"
                  >
                    Entrar
                  </Button>
                </GridItem>
              </Grid>
            </FormControl>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
