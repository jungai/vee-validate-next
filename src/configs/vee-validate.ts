import { required, email, min } from '@vee-validate/rules';
import { defineRule } from 'vee-validate';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);