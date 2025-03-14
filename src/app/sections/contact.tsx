"use client";
import Title from "@/components/custom/title";
import {
  Box,
  Button,
  Field,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Status,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });
  const [success, setSuccess] = useState("");
  const fields = [
    { label: "Name", placeHolder: "John Doe" },
    { label: "Email", placeHolder: "johndoe@email.com" },
    { label: "Subject", placeHolder: "Subject" },
  ];
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value.trim() === "",
    }));
  };
  const contactHandle = () => {
    const newErrors = {
      name: form.name.trim() === "",
      email: form.email.trim() === "",
      subject: form.subject.trim() === "",
      message: form.message.trim() === "",
    };
    setErrors(newErrors);
    if (Object.values(newErrors).every((err) => !err)) {
      console.log(form);
      setSuccess("true");
      setTimeout(() => {
        setSuccess("");
      }, 3000);
      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setSuccess("false");
      console.log("Failed - Fill all required fields");
    }
  };

  return (
    <Grid
      id="contact"
      paddingX="2rem"
      width="100%"
      paddingY="15rem"
      gridTemplateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
      ]}
      gap="10rem"
    >
      <GridItem display="flex" flexDirection="column" gap="1rem">
        <Title caption="keep close" name="Get in touch" />
        <Text color="var(--opacity-color)" marginTop="5rem">
          Have a question or want to book my services? Reach out, and let’s
          create something special together.
        </Text>
        <Box display="flex" alignItems="center" flexDirection="row" gap="1rem">
          <AiOutlineMail
            style={{ fontSize: "2rem", color: "var(--primary-color)" }}
          />
          <Text fontSize="sm" color="var(--opacity-color)">
            ameliadubois@gmail.com
          </Text>
        </Box>
        <Box display="flex" alignItems="center" flexDirection="row" gap="1rem">
          <BsTelephone
            style={{ fontSize: "2rem", color: "var(--primary-color)" }}
          />
          <Text color="var(--opacity-color)" fontSize="sm">
            from 8.00 AM (GMT+11) to 10.00 PM (GMT+11)
          </Text>
        </Box>
        <Box height="1px" width="100%" bg="var(--opacity-color)" />
        <Text fontSize="sm" letterSpacing="0.5rem" textTransform="uppercase">
          follow me
        </Text>
        <Box display="flex" alignItems="center" flexDirection="row" gap="1rem">
          <FaLinkedinIn
            style={{
              marginBottom: "10px",
              fontSize: "20px",
              color: "var(--primary-color)",
            }}
          />
          <FaFacebookF
            style={{
              marginBottom: "10px",
              fontSize: "20px",
              color: "var(--primary-color)",
            }}
          />
          <FaInstagram
            style={{
              marginBottom: "10px",
              fontSize: "20px",
              color: "var(--primary-color)",
            }}
          />
        </Box>
      </GridItem>
      <GridItem display="flex" flexDirection="column" gap="1rem">
        <Heading fontSize="3xl" color="var(--primary-color)">
          Your Details
        </Heading>
        <Text>Let me know how to get back to you</Text>
        <Stack>
          {fields.map((field, index) => (
            <Field.Root
              invalid={errors[field.label.toLowerCase() as keyof typeof errors]}
              orientation="vertical"
              key={index}
            >
              <Field.Label
                fontSize="xs"
                letterSpacing="0.3rem"
                textTransform="uppercase"
              >
                {field.label}
              </Field.Label>
              <Input
                border="none"
                name={field.label.toLowerCase()}
                backgroundColor="var(--opacity-primary)"
                padding="1rem"
                value={
                  form[field.label.toLowerCase() as keyof typeof form] || ""
                }
                onChange={handleInputChange}
                placeholder={field.placeHolder}
                flex="1"
                _focus={{
                  outline: "solid",
                  outlineColor: "var(--primary-color)",
                  outlineWidth: "1px",
                }}
              />
              <Field.ErrorText>This is an error text</Field.ErrorText>
            </Field.Root>
          ))}
          <Field.Root orientation="vertical" invalid={errors.message}>
            <Field.Label
              fontSize="xs"
              letterSpacing="0.3rem"
              textTransform="uppercase"
            >
              Message
            </Field.Label>
            <Textarea
              name="message"
              border="none"
              onChange={handleInputChange}
              backgroundColor="var(--opacity-primary)"
              padding="1rem"
              value={form.message}
              placeholder="Message"
              flex="1"
              _focus={{
                outline: "solid",
                outlineColor: "var(--primary-color)",
                outlineWidth: "1px",
              }}
            />
            <Field.ErrorText>This is an error text</Field.ErrorText>
          </Field.Root>
        </Stack>
        <Button
          fontSize="xs"
          letterSpacing="0.3rem"
          textTransform="uppercase"
          backgroundColor="var(--primary-color)"
          width="fit-content"
          _hover={{
            backgroundColor: "var(--opacity-primary)",
            borderColor: "var(--primary-color)",
            color: "white",
          }}
          onClick={contactHandle}
        >
          contact me
        </Button>
        {success !== "" && (
          <Status.Root
            width="100px"
            colorPalette={success === "true" ? "green" : "red"}
          >
            <Status.Indicator />
            {success === "true" ? "Success" : "Failed"}
          </Status.Root>
        )}
      </GridItem>
    </Grid>
  );
};

export default Contact;
