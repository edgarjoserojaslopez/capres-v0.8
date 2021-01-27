import {
  FormControl,
  Grid,
  makeStyles,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import { TextFields } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { useForm, Form } from "../../useForm";

export default function ContactoForm() {
  const initialFormValues = {
    id: 0,
    fullName: "",
    email: "",
    message: "",
  };

  const { values, setValues, handleInputChange } = useForm(initialFormValues);

  return (
    <Form>
      <Grid container>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            label="Nombre Completo"
            name="fullName"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="Correo Electrónico"
            name="email"
            value={values.email}
            onChange={handleInputChange}
          />
          <TextField
            variant="outlined"
            label="Mensaje"
            name="message"
            type="text"
            multiline
            rowsMax={4}
            value={values.message}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
    </Form>
  );
}
