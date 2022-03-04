import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Rodrigo Pereira</Text>
                    <Text color="gray.300" fontSize="small">
                        rodrigo.pereira!@hotmail.com
                    </Text>
                </Box>
            )}

            <Avatar size="md" name="Rodrigo Pereira" src="https://avatars.githubusercontent.com/u/39073227?v=4" />
        </Flex>
    )
}