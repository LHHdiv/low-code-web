// module.exports = { extends: ['@commitlint/config-conventional'] }

// eslint-disable-next-line no-undef
module.exports = {
  extends: ['@commitlint/config-conventional'], // extends can be nested
  parserPreset: 'conventional-changelog-conventionalcommits',
  prompt: {
    settings: {},
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      skip: ':skip',
      max: 'upper %d chars',
      min: '%d chars at least',
      emptyWarning: 'can not be empty',
      upperLimitWarning: 'over limit',
      lowerLimitWarning: 'below limit',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      confirmCommit: '是否提交或修改commit ?'
    },
    types: [
      { value: 'feat', name: 'feat:     ✨ 新增功能 | A new feature', emoji: '✨ ' },
      { value: 'fix', name: 'fix:      🐛 修复缺陷 | A bug fix', emoji: '🐛 ' },
      { value: 'docs', name: 'docs:     📝 文档更新 | Documentation only changes', emoji: '📝 ' },
      {
        value: 'style',
        name: 'style:    💄 代码格式 | Changes that do not affect the meaning of the code',
        emoji: '💄 '
      },
      {
        value: 'refactor',
        name: 'refactor: 📦️ 代码重构 | A code change that neither fixes a bug nor adds a feature',
        emoji: '📦️ '
      },
      {
        value: 'perf',
        name: 'perf:     🚀 性能提升 | A code change that improves performance',
        emoji: '🚀 '
      },
      {
        value: 'test',
        name: 'test:     🚨 测试相关 | Adding missing tests or correcting existing tests',
        emoji: '🚨 '
      },
      {
        value: 'build',
        name: 'build:    🛠 构建相关 | Changes that affect the build system or external dependencies',
        emoji: '🛠 '
      },
      {
        value: 'ci',
        name: 'ci:       🎡 持续集成 | Changes to our CI configuration files and scripts',
        emoji: '🎡 '
      },
      {
        value: 'chore',
        name: "chore:    🔨 其他修改 | Other changes that don't modify src or test files",
        emoji: '🔨 '
      },
      {
        value: 'revert',
        name: 'revert:   ⏪️ 回退代码 | Reverts a previous commit',
        emoji: ':rewind:'
      }
    ],
    useEmoji: true,
    confirmColorize: true,
    emojiAlign: 'center',
    questions: {
      scope: {
        description: 'What is the scope of this change (e.g. component or file name)'
      },
      subject: {
        description: 'Write a short, imperative tense description of the change'
      },
      body: {
        description: 'Provide a longer description of the change'
      },
      isBreaking: {
        description: 'Are there any breaking changes?'
      },
      breakingBody: {
        description:
          'A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself'
      },
      breaking: {
        description: 'Describe the breaking changes'
      },
      isIssueAffected: {
        description: 'Does this change affect any open issues?'
      },
      issuesBody: {
        description:
          'If issues are closed, the commit requires a body. Please enter a longer description of the commit itself'
      },
      issues: {
        description: 'Add issue references (e.g. "fix #123", "re #123".)'
      }
    }
  }
}
