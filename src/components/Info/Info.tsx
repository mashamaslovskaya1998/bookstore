import { useForm } from "react-hook-form";
import {
  StyledButton,
  StyledInfo,
  StyledInfoBlock,
  StyledInfoButton,
  StyledInfoInformation,
  StyledInfoInput,
} from "./style";

type InfoValue = {
  email: string;
};

export const Info = () => {
  const { register } = useForm<InfoValue>();
  return (
    <StyledInfoBlock>
      <StyledInfo>Subscribe to Newsletter</StyledInfo>
      <StyledInfoInformation>
        Be the first to know about new IT books, upcoming releases, exclusive
        offers and more.
      </StyledInfoInformation>
      <StyledButton>
        <StyledInfoInput
          placeholder="Your name"
          {...register("email", { required: true })}
        ></StyledInfoInput>
        <StyledInfoButton>Subscribe</StyledInfoButton>
      </StyledButton>
    </StyledInfoBlock>
  );
};
