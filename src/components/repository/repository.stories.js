
import Repository from './repository'

const repositoryData = {
  id: 1,
  node_id: 'MDEwOlJlcG9zaXRvcnkxMjYyNjg4NjI=',
  name: 'test-repo',
  full_name: 'test-repo',
  private: false,
  html_url: 'https://github.com/test-repo',
  description: 'test repo',
  fork: false,
  url: 'https://api.github.com/repos/test-repo',
  languages_url: 'https://api.github.com/repos/test-repo/languages',
  created_at: '2022-01-01T00:00:00Z',
  updated_at: '2022-01-01T00:00:00Z',
  pushed_at: '2022-01-01T00:00:00Z',
  homepage: 'https://github.com',
}

export default {
  title: 'gitstream/components/repository',
  component: Repository,
}

export const Default = {
  args: {...repositoryData},
}
