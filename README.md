### mock

```
yarn mock // 前端项目yarn server // 后端项目
```

所有/mock 开头的接口走 mock 数据

### 代码提交规范

<type>(<scope>): <subject>

```
feat: 增加新功能 fix: 修复bugdocs: 只改动了文档相关的内容style: 不影响代码含义的改动，例如去掉空格、改变缩进、增删分号build: 构造工具的或者外部依赖的改动，例如webpack，npmrefactor: 代码重构时使用revert: 执行git revert打印的messagetest: 添加测试或者修改现有测试perf: 提高性能的改动ci: 与CI（持续集成服务）有关的改动chore: 不修改src或者test的其余修改，例如构建过程或辅助工具的变动
```

git 提交工具 commitizen

```
npm install -g commitizencommitizen init cz-conventional-changelog --save --save-exact
```
