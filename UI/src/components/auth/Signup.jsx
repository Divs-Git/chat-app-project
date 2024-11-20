import { Button, Fieldset, Input } from "@chakra-ui/react";

import {
  FileUploadList,
  FileUploadRoot,
  FileUploadTrigger,
} from "../ui/file-button.jsx";
import { HiUpload } from "react-icons/hi";
import { Field } from "../ui/field.jsx";
import { PasswordInput, PasswordStrengthMeter } from "../ui/password-input.jsx";
import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [pic, setPic] = useState();

  return (
    <Fieldset.Root size="lg" maxW="md">
      <Fieldset.Content>
        <Field label="Name" required>
          <Input
            name="name"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Field>

        <Field label="Email address" required>
          <Input
            name="email"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Field>

        <Field label="Password" required>
          <PasswordInput
            value={password}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Field>

        <Field label="Confirm Password" required>
          <PasswordInput
            value={confirmPassword}
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Field>
      </Fieldset.Content>

      <FileUploadRoot>
        <FileUploadTrigger asChild>
          <Button variant="subtle" colorPalette={"green"} size="sm">
            <HiUpload /> Upload Your Picture
          </Button>
        </FileUploadTrigger>
        <FileUploadList />
      </FileUploadRoot>

      <Button type="submit" colorPalette={"green"} alignSelf="flex-start">
        Submit
      </Button>
    </Fieldset.Root>
  );
};

export default Signup;
