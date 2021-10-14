import React from "react";
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

function FormInput({ name, label }) {
    const { control } = useFormContext();
    // const isError = false;
  
    return (
        <Grid item xs={12} sm={6}>
            {/* <Controller
          as={TextField}
          name={name}
          control={control}
          label={label}
          fullWidth
          required={required}
          error={isError}
        /> */}
            <Controller
                render={({ field }) => (
                    <TextField
                        {...field}
                        fullWidth
                        label={label}
                        required
                    />
                )}
                control={control}
                name={name}
                defaultValue=""
            />
        </Grid>
    );
  }

  
  
  export default FormInput;
  