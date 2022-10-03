import { Box } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box textAlign="center" opacity={0.4} fontSize="sm">
            &copy; {new Date().getFullYear()} 0xPratham. All Rights Reserved.
        </Box>
    )
}

export default Footer
