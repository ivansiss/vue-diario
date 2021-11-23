<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
        <span class="text-success fs-3 fw-bold">19</span>
        <span class="mx-1 fs-3">Noviembre</span>
        <span class="mx-2 fs-4 fw-light">2021, viernes</span>
      </div>
      <div>
        <botton class="btn btn-danger mx-2">
          Borrar
          <i class="fa fa-trash-alt"></i>
        </botton>
        <botton class="btn btn-primary my-2">
          Subir foto
          <i class="fa fa-upload"></i>
        </botton>
      </div>
  </div>

  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea name="" placeholder="¿Qué sucedió hoy?" id="" cols="30" rows="10"></textarea>
  </div>

  <Fab  
        icon="fa-save" 
  />
  <img src="https://www.lavanguardia.com/files/image_948_465/uploads/2021/11/19/61976f3bbce54.jpeg" class="img-thumbnail" alt="entry-picture">

</template>

<script>
import { defineAsyncComponent} from 'vue';

export default {
    components: {
            Fab: defineAsyncComponent(() => import('../components/Fab.vue')),
    }
}
</script>

<style lang="scss" scoped>

  textarea{
    color: black;
    font-size: 20px;
    border: none;
    height: 100%;
      &:focus{
        outline:none;
      }
  }

  img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgb($color: #000000, $alpha: 0.2);
  }

</style>