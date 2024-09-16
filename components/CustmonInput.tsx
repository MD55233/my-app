import React from 'react';
import { FormControl, FormLabel, FormField, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Control, Path } from 'react-hook-form'; // Path is useful for typed form fields
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';

// Define form schema and infer types
const formSchema = authFormSchema('sign-up');
type FormSchemaType = z.infer<typeof formSchema>;

interface CustmonInputProps {
  control: Control<FormSchemaType>;
  name: Path<FormSchemaType>; // Path enforces that 'name' is one of the form schema keys
  label: string;
  placeholder: string;
}

const CustmonInput = ({ control, name, label, placeholder }: CustmonInputProps) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === 'password' ? 'password' : 'text'}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustmonInput;
 