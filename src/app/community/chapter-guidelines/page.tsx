import DockitRenderer from '@/components/DockitRenderer';
import { getDockitData } from '@/lib/dockit';

async function getPageData() {
  // The filename needs to match one of the files in the dockit-repo
  // https://github.com/neurotechx/dockit-repo
  return getDockitData('chapter-guidelines.rst');
}

export default async function Page() {
  const { html, title } = await getPageData();
  return <DockitRenderer html={html} title={title} />;
}
