import SectionHeading from '@/components/ui/SectionHeading';
import BlogCard from '@/components/ui/BlogCard';

const posts = [
  {
    title: 'Blue H2O Mineral Water Available Near You',
    excerpt: 'Discover how Aqua Clear is making premium mineral water accessible to communities across the twin cities.',
    category: 'Product',
    date: 'Sep 15, 2024',
    readTime: '3 min read',
    slug: 'mineral-water-near-you',
  },
  {
    title: 'Superior Pure Hydration for Offices',
    excerpt: 'Learn why leading offices are switching to Aqua Clear for their employee hydration needs and wellness programs.',
    category: 'Business',
    date: 'Aug 28, 2024',
    readTime: '4 min read',
    slug: 'office-hydration',
  },
  {
    title: 'Deionized Water: Quality vs. Price',
    excerpt: 'Understanding the difference between deionized water and mineral water, and why quality matters for your health.',
    category: 'Health',
    date: 'Aug 12, 2024',
    readTime: '5 min read',
    slug: 'deionized-water-quality',
  },
];

export default function BlogPreview() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeading
          eyebrow="BLOG"
          title="Latest From Our Blog"
          subtitle="Stay informed about water quality, health tips, and company updates."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <BlogCard key={post.slug} {...post} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
