<template>

  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">

        <header class="modal-header">
          <slot name="header"></slot>
        </header>

        <section class="modal-body">
          <slot name="body"></slot>
        </section>

      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'LoginModal'
};
</script>

<style>
.modal {
  background: #4e3d3d;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-dialog{
  width: 500px;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid #eeeeee;
  color: #4AAE9B;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.close{
  position: absolute;
  top: 5px;
  right: 10px;
  color: #dc0c13;
  z-index: 9999999999;
}

.btn-close {
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  font-weight: bold;
  color: #dc0c13;
  background: #000;
  border-radius: 20px;
  z-index: 999999;
}

.btn-green {
  color: white;
  background: #ea0606;
  border: 1px solid #ea0316;
  border-radius: 2px;
}
</style>