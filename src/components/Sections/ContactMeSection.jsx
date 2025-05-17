import * as Yup from "yup";
import useSubmit from "../../hooks/useSubmit";
import { useFormik } from "formik";
import AlertBox from "./AlertBox";
import { useAlertContext } from "../../context/alertContext";
import {
  Button,
  Field,
  Fieldset,
  For,
  Heading,
  Input,
  NativeSelect,
  Stack,
  Textarea,
  chakra,
  Box,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const Mark = chakra("mark", {
  base: {
    variant: "subtle",
    bg: "green.300",
    transition: "background-color 0.3s ease",
    _hover: {
      bg: "green.500",
      variant: "solid",
      px: 2,
      py: 1,
      fontWeight: "bold",
    },
  },
});

const ContactMeSection = () => {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen, isOpen } = useAlertContext();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      enquiryType: "Freelance project proposal",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      message: Yup.string()
        .required("Message is required")
        .min(25, "Message must be at least 25 characters"),
    }),
    onSubmit: (values) => {
      submit("/submit/data", values);
      onOpen();
    },
  });

  return (
    <FullScreenSection
      boxProps={{
        bg: "white",
        color: "black",
        px: 4,
        py: 20,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Heading
        as="h2"
        size="2xl"
        mb={8}
        color="white"
        fontWeight="extrabold"
        textShadow="0 0 20px rgba(0,255,0,0.5)"
      >
        <Mark>Contact Me</Mark>
      </Heading>

      {!isLoading && isOpen && <AlertBox response={response} />}
      {isLoading && <p>Loading...</p>}

      <form onSubmit={formik.handleSubmit}>
        <Stack
          bg="white"
          p={12}
          spacing={8}
          w="full"
          align="center"
          justify="center"
          borderRadius="xl"
          boxShadow="lg"
          maxW="lg"
          color="black"
        >
          <Fieldset.Root size="lg" maxW="md">
            <Stack spacing={4}>
              <Fieldset.Legend
                fontWeight="bold"
                fontSize="xl"
                color="green.600"
              >
                Contact Me
              </Fieldset.Legend>
              <Fieldset.HelperText color="gray.600">
                Please provide your contact details below.
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content pt={4}>
              <Field.Root
                required
                invalid={formik.touched.name && formik.errors.name}
              >
                <Field.Label color="gray.700">Name</Field.Label>
                <Input
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderColor="green.300"
                />
                <Field.ErrorText color="red.500">
                  Name is Required
                </Field.ErrorText>
              </Field.Root>

              <Field.Root
                required
                invalid={formik.touched.email && formik.errors.email}
              >
                <Field.Label color="gray.700">Email address</Field.Label>
                <Input
                  name="email"
                  type="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  borderColor="green.300"
                />
                <Field.ErrorText color="red.500">
                  Email is Required
                </Field.ErrorText>
              </Field.Root>

              <Field.Root
                required
                invalid={
                  formik.touched.enquiryType && formik.errors.enquiryType
                }
                bg="white"
              >
                <Field.Label color="gray.700">Type Of Enquiry</Field.Label>
                <NativeSelect.Root bg="white">
                  <NativeSelect.Field
                    name="enquiryType"
                    value={formik.values.enquiryType}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    borderColor="green.300"
                    bg="white"
                  >
                    <For
                      each={[
                        "Freelance project proposal",
                        "Open source consultancy session",
                        "Other",
                      ]}
                    >
                      {(item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      )}
                    </For>
                  </NativeSelect.Field>
                  <NativeSelect.Indicator borderColor="green.300" bg="white" />
                </NativeSelect.Root>
              </Field.Root>

              <Field.Root
                required
                invalid={formik.touched.message && formik.errors.message}
              >
                <Field.Label color="gray.700">Message</Field.Label>
                <Textarea
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Brief Description of your Enquiry"
                  borderColor="green.300"
                  _placeholder={{ color: "gray.500" }}
                />
                <Field.ErrorText color="red.500">
                  Message is Required
                </Field.ErrorText>
              </Field.Root>
            </Fieldset.Content>

            <Button
              type="submit"
              alignSelf="flex-start"
              mt={4}
              bg="green.500"
              color="white"
              _hover={{ bg: "green.600" }}
              transition="all 0.2s"
            >
              Submit
            </Button>
          </Fieldset.Root>
        </Stack>
      </form>
    </FullScreenSection>
  );
};

export default ContactMeSection;
