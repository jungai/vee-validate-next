<template>
    <div class="flex mb-2">
      <div class="flex-auto">
        <sp-field-label :required="required">
          {{ label }}
        </sp-field-label>
        <div class="flex flex-row">
          <div class="flex-auto">
            <sp-textfield
              :value="inputValue"
              class="w-full"
              :placeholder="placeholder"
              :maxlength="maxlength"
              :valid="meta.valid || required"
              :invalid="!meta.valid"
              @input="handleInput"
            />
          </div>
  
          <div v-if="loading" class="flex-shink p-2 m-auto">
            <sp-progress-circle indeterminate size="small"></sp-progress-circle>
          </div>
        </div>
  
        <sp-field-label class="text-red-500">
          {{ errors }}
        </sp-field-label>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onUpdated } from "vue";
  import { useField } from 'vee-validate';
  
  export default defineComponent({
    name: "component-text-field",
    emits: ['update:modelValue'],
    props: {
      modelValue: {
        type: String,
      },
      name: {
        type: String,
        required: true,
      },
      label: {
        type: String,
      },
      placeholder: {
        type: String,
      },
      maxlength: {
        type: Number,
        default: -1,
      },
      loading: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      required: {
        type: Boolean,
        default: false,
      },
      errors: {
        type: String,
      },
      rules: {
        type: [Object, String] // 'required|max:5' or { required: true, max:5 }
      }
    },
  
    setup(props, { emit }) {
        const { value: inputValue, meta } = useField<string | undefined>(props.name, props.rules, {
            initialValue: props.modelValue
        })

        const handleInput = (e) => {
          emit('update:modelValue', e.target.value )
        }

        // when props is update emit value or use watch instead
        onUpdated(() => {
          inputValue.value = props.modelValue
        })

        return {
            inputValue,
            handleInput,
            meta,
        };
    },
  });
  </script>