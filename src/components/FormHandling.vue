<template lang="">
  <div>
    form handling lecture no. 19-20 <br /><br />
    <div>
      <pre>
          {{ JSON.stringify(formValues, null, 2) }}
      </pre>
    </div>
    <form @submit="submitForm(formValues,$event)">
      <div>
        <label for="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="name"
          name="name"
          v-model="formValues.name"
        />
      </div>
      <div>
        <label for="age">Age</label>
        <input
          type="text"
          id="age"
          placeholder="age"
          name="age"
          v-model="formValues.age"
        />
      </div>
      <div>
        <label for="country">country</label>
        <select name="country" id="country" v-model="formValues.country">
          <option value="">Select a country></option>
          <option value="india">india</option>
          <option value="vietnam">vietnam</option>
          <option value="singapore">singapore</option>
        </select>
      </div>
      <div>
        <label for="job-location">job location</label>
        <select
          name="job_location"
          multiple
          id="job-location"
          v-model="formValues.jobLocation"
        >
          <option value="india">india</option>
          <option value="vietnam">vietnam</option>
          <option value="singapore">singapore</option>
        </select>
      </div>
      <div>
        <input
          type="checkbox"
          id="remoteWork"
          v-model="formValues.remoteWork"
          true-value="yes"
          false-value="no"
        />
        <label for="remoteWork">open to remote work?</label>
      </div>
      <div>
          <input type="submit" placeholder="Submit Form"/>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "FormHandling",
  data() {
    return {
      formValues: {
        name: "",
        age: "",
        country: "",
        jobLocation: [],
        remoteWork: "no",
      },
    };
  },
  methods: {
      submitForm(formData,event){
          event.preventDefault();
          console.log(formData);
      }
  },
};
</script>
<style lang=""></style>
