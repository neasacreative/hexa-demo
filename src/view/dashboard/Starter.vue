<template>
  <Main>
    <a-row justify="center">
      <a-col :xxl="16" :xl="18" :lg="20" :md="22" :sm="24">
        <sdCards headless>
          <div class="ninjadash-starter">
            <div class="ninjadash-starter__content">
              <div class="ninjadash-starter__content-header">
                <img :src="require('@/static/img/logo/logo-primary.png')" alt="HexaDash" />
                <h1>Welcome to HexaDash Boilerplate</h1>
                <p>
                  This is a clean boilerplate version of HexaDash with minimal layout structure.
                  Start building your application from here.
                </p>
              </div>
              
              <div class="ninjadash-starter__content-body">
                <a-row :gutter="24">
                  <a-col :lg="8" :md="12" :sm="24">
                    <div class="ninjadash-starter__card">
                      <div class="ninjadash-starter__card-icon">
                        <unicon name="layer-group" />
                      </div>
                      <h3>Layout Structure</h3>
                      <p>Complete layout system with sidebar, header, and content area ready to use.</p>
                    </div>
                  </a-col>
                  
                  <a-col :lg="8" :md="12" :sm="24">
                    <div class="ninjadash-starter__card">
                      <div class="ninjadash-starter__card-icon">
                        <unicon name="palette" />
                      </div>
                      <h3>Theme System</h3>
                      <p>Dark/light theme support with customizable color schemes and responsive design.</p>
                    </div>
                  </a-col>
                  
                  <a-col :lg="8" :md="12" :sm="24">
                    <div class="ninjadash-starter__card">
                      <div class="ninjadash-starter__card-icon">
                        <unicon name="cog" />
                      </div>
                      <h3>Ready to Customize</h3>
                      <p>Clean codebase with modern Vue 3, Vite, and Ant Design Vue setup.</p>
                    </div>
                  </a-col>
                </a-row>
              </div>
              
              <div class="ninjadash-starter__content-footer">
                <h4>Getting Started</h4>
                <ul>
                  <li>Add your routes in <code>src/routes/</code></li>
                  <li>Create components in <code>src/components/</code></li>
                  <li>Build pages in <code>src/view/</code></li>
                  <li>Customize theme in <code>src/config/theme/</code></li>
                </ul>
              </div>
            </div>
          </div>
        </sdCards>
      </a-col>
    </a-row>
  </Main>
</template>

<script>
import { defineComponent } from 'vue';
import { Main } from './styled';

export default defineComponent({
  name: 'Starter',
  components: {
    Main,
  },
});
</script>

<style lang="css" scoped>
.ninjadash-starter {
  padding: 50px 30px;
  text-align: center;
}

.ninjadash-starter__content-header {
  margin-bottom: 50px;
}

.ninjadash-starter__content-header img {
  width: 120px;
  height: auto;
  margin-bottom: 30px;
}

.ninjadash-starter__content-header h1 {
  font-size: 48px;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 20px;
  line-height: 1.2;
}

.ninjadash-starter__content-header p {
  font-size: 18px;
  color: #64748b;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.ninjadash-starter__content-body {
  margin-bottom: 50px;
}

.ninjadash-starter__card {
  padding: 40px 30px;
  border-radius: 12px;
  background: #fff;
  border: 1px solid #e2e8f0;
  height: 100%;
  transition: all 0.3s ease;
}

.ninjadash-starter__card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  border-color: #3b82f6;
}

.ninjadash-starter__card-icon {
  width: 60px;
  height: 60px;
  margin: 0 auto 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  border-radius: 12px;
  color: #fff;
  font-size: 24px;
}

.ninjadash-starter__card h3 {
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 15px;
}

.ninjadash-starter__card p {
  color: #64748b;
  line-height: 1.6;
  margin: 0;
}

.ninjadash-starter__content-footer {
  background: #f8fafc;
  padding: 40px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
}

.ninjadash-starter__content-footer h4 {
  font-size: 24px;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 25px;
}

.ninjadash-starter__content-footer ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
}

.ninjadash-starter__content-footer li {
  font-size: 16px;
  color: #64748b;
  display: flex;
  align-items: center;
  gap: 8px;
}

.ninjadash-starter__content-footer code {
  background: #e2e8f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 14px;
  color: #3b82f6;
}

@media (max-width: 768px) {
  .ninjadash-starter {
    padding: 30px 15px;
  }
  
  .ninjadash-starter__content-header h1 {
    font-size: 32px;
  }
  
  .ninjadash-starter__content-header p {
    font-size: 16px;
  }
  
  .ninjadash-starter__content-footer ul {
    flex-direction: column;
    gap: 15px;
  }
}
</style>
