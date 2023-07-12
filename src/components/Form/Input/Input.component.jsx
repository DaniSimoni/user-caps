import { PropTypes } from 'prop-types';
import * as Styled from './Input.styled';
import { useState } from 'react';
import { MdVisibility, MdVisibilityOff} from 'react-icons/md'



export const InputComponent = ({label, type, id, placeholder}) => {

    const [showPassword, setShowPassword] = useState('false');

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <>
            <Styled.InputGroup>
                <Styled.Label htmlFor={ id }>{ label }</Styled.Label>

                { type !== 'textarea' &&
                <Styled.InputContainer>
                    <Styled.Input type={ showPassword ? 'text' : type} id={id} placeholder={placeholder} className='Input'></Styled.Input>
                    { type === 'password' && 
                        <Styled.Icon type='button' onClick={handleShowPassword}>
                            { !showPassword
                                ? <MdVisibility/>
                                : <MdVisibilityOff/> 
                            }
                        </Styled.Icon>}
                </Styled.InputContainer>
                }

                { type === 'textarea' &&
                    <Styled.TextArea type={type} id={id} placeholder={placeholder} className='TextArea'></Styled.TextArea>
                }
            </Styled.InputGroup>
        </>
    )
}

InputComponent.prototype = {
    label: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
}