import { Box, IBoxProps, Text } from "native-base";

type Props = IBoxProps & {
  is_new?: boolean;
};

const STATUS_MAP = {
  true: {
    width: "12",
    background: "blue.dark",
    title: "NOVO",
  },
  false: {
    width: "16",
    background: "gray.200",
    title: "USADO",
  },
};

export function StatusProduct({ is_new = true, ...rest }: Props) {
  const { width, background, title } = STATUS_MAP[String(is_new) as keyof typeof STATUS_MAP];
  return (
    <Box w={width} h="5" bg={background} rounded="lg" alignItems="center" 
      justifyContent="center" {...rest}
    >
      <Text color="gray.700" fontFamily="heading" fontSize="13">{title}</Text>
    </Box>
  );
}