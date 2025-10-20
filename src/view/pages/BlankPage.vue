<template>
  <div>
    <sdPageHeader title="Blank Page" class="ninjadash-page-header-main">
      <template #buttons>
        <sdButton size="small" type="primary">
          <unicon name="plus" width="14" />
          Add New
        </sdButton>
      </template>
    </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :sm="24" :xs="24">
          <sdCards headless>
            <div class="ninjadash-blank-page">
              <div class="ninjadash-blank-page-content">
                <div class="ninjadash-blank-page-icon">
                  <unicon name="file-plus" />
                </div>
                <h2>Blank Page</h2>
                <p>This is a blank page template. Start building your content here.</p>
                <sdButton type="primary" size="large">
                  Get Started
                </sdButton>
              </div>
            </div>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script>
import { Main } from "../styled";
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlankPage",
  components: {
    Main,
  },
});
</script>

<style lang="css" scoped>
.ninjadash-blank-page {
  padding: 80px 20px;
  text-align: center;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ninjadash-blank-page-content {
  max-width: 400px;
}

.ninjadash-blank-page-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  border-radius: 50%;
  color: #0369a1;
  font-size: 32px;
}

.ninjadash-blank-page h2 {
  font-size: 28px;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 15px;
}

.ninjadash-blank-page p {
  font-size: 16px;
  color: #64748b;
  margin-bottom: 30px;
  line-height: 1.6;
}
</style>
