import React from 'react';
import { FormControl, FormLabel, FormField, FormMessage } from './ui/form';
import { Input } from './ui/input';
import { Control } from 'react-hook-form';
import { z } from 'zod';
import { authFormSchema } from '@/lib/utils';

const formSchema = authFormSchema('sign-up')

interface CustmonInputProps {
  control: Control<z.infer<typeof formSchema>>;
  name:  Control<z.infer<typeof formSchema>> ,
  label: string,
  placeholder: string
}

const CustmonInput = ({ control, name, label, placeholder }: CustmonInputProps) => {
  return (
    <FormField
      control={control} // Use control prop instead of form.control
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
