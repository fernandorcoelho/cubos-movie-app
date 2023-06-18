import React, { forwardRef } from 'react';

import { Input } from './styles';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const SearchInputBase: React.ForwardRefRenderFunction<HTMLInputElement, SearchInputProps> = (
  { ...rest },
  ref,
) => {
  return <Input {...rest} ref={ref} />;
};

export const SearchInput = forwardRef(SearchInputBase);
