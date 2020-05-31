<template>
  <div class="container">
    <h1 class="mb-5">Login</h1>
    <div class="form-group">
      <label for="email">Email</label>
      <input class="form-control" type="text" id="email" />
    </div>
    <div class="form-group">
      <label for="email">password</label>
      <input class="form-control" type="password" id="password" />
    </div>
    <button class="btn btn-primary btn-block" type="submit">Login</button>
    <div class="flex mt-3">or<router-link class="nav-link" to="/register">Create a new account</router-link>here
    </div>
  </div>
</template>

<style scoped>
.flex {
   display: flex;
   align-items: center;
   justify-content: center;
}
</style>