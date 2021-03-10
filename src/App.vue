<template>
  <sp-theme scale="medium" color="lightest">
    <div class="flex flex-col justify-center items-center">
      <form @submit.prevent="submit">
        <TextField v-model="values.food" name="food" label="อาหาร" :errors="errors?.food"/>
        <TextField v-model="values.myLove" name="myLove" label="คนที่ชอบ" :errors="errors?.myLove"/>
        <sp-button variant="cta" type="submit" :disabled="!meta.valid || !meta.dirty">submit</sp-button>
        <sp-button variant="cta" @click="resetForm()">reset</sp-button>
      </form>
    </div>
    <hr />
    {{ meta }}
    <hr />
    state -> {{ state }}
    <hr />
    value -> {{ values }}
    <hr />
    errors -> {{ errors }}
  </sp-theme>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { reactive, ref, toRefs } from 'vue';
import TextField from './components/TextField/index.vue'

interface InitialData {
  food?: string;
  myLove?: string;
}

const state = reactive({ // should use normal obj
  food: undefined,
  myLove: undefined
})

const {
  values,
  handleSubmit,
  errors,
  meta,
  resetForm, 
} = useForm<InitialData>({
  initialValues: {
    food: undefined,
    myLove: 'rose❤️'
  },
  validateOnMount: true,
  validationSchema: {
    food: 'required',
    myLove: 'required',
  }
})

const submit = () => handleSubmit(v => {
  console.log(v)
})()


</script>
