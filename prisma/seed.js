const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const users = [
  { name: 'Wanjiku Kamau', email: 'wanjiku@example.com', bio: 'Tech writer from Westlands, Nairobi. Contact: 0712345678' },
  { name: 'Ochieng Otieno', email: 'ochieng@example.com', bio: 'Full-stack developer in Kisumu. Contact: 0722345678' },
  { name: 'Amina Wafula', email: 'amina@example.com', bio: 'UI/UX designer from Nyali, Mombasa. Contact: 0733345678' },
  { name: 'Njoroge Mwangi', email: 'njoroge@example.com', bio: 'CS student at JKUAT, Juja. Contact: 0700345678' },
  { name: 'Fatuma Hassan', email: 'fatuma@example.com', bio: 'Data analyst from Lamu. Contact: 0710345678' },
  { name: 'Kipchoge Rono', email: 'kipchoge@example.com', bio: 'Mobile developer from Eldoret. Contact: 0711345678' },
  { name: 'Nyambura Wanjiru', email: 'nyambura@example.com', bio: 'Backend engineer in Karen, Nairobi. Contact: 0741345678' },
  { name: 'Otieno Oduor', email: 'otieno@example.com', bio: 'DevOps specialist from Kisumu. Contact: 0758345678' },
  { name: 'Chebet Kosgei', email: 'chebet@example.com', bio: 'Product manager from Kericho. Contact: 0712456789' },
  { name: 'Muthoni Njeri', email: 'muthoni@example.com', bio: 'Startup founder in Kilimani, Nairobi. Contact: 0722456789' },
];

const tagNames = [
  'javascript', 'react', 'nodejs', 'prisma',
  'career', 'tutorial', 'kenya-tech', 'ai',
];

const posts = [
  { title: 'Why Every Kenyan Developer Should Learn TypeScript', content: 'TypeScript can catch many mistakes before your code reaches production. For teams working across Nairobi and beyond, clear types also make it easier to collaborate on growing applications.', author: 0, tags: [0, 4, 6], published: true, daysAgo: 88 },
  { title: 'Setting Up a Home Office in Nairobi on a Budget', content: 'A reliable workspace does not need an expensive desk or imported equipment. Start with a comfortable chair, a stable internet connection, and a backup plan for power interruptions.', author: 1, tags: [4, 6], published: true, daysAgo: 85 },
  { title: 'How I Built My First SaaS Product from Kibera', content: 'I started by listening to small businesses that were tracking orders in notebooks. A simple web app and steady feedback from early users helped me turn that idea into a product.', author: 2, tags: [0, 2, 6], published: true, daysAgo: 82 },
  { title: 'React Server Components Explained Simply', content: 'Server components let parts of a React application render close to the data they need. Understanding what stays on the server can help you ship less JavaScript to the browser.', author: 3, tags: [1, 5], published: true, daysAgo: 79 },
  { title: 'The State of AI Startups in East Africa', content: 'AI companies in East Africa are finding practical opportunities in agriculture, education, and financial services. Long-term progress will depend on representative data and products built with local communities.', author: 4, tags: [6, 7], published: true, daysAgo: 76 },
  { title: 'From Jua Kali to JavaScript: My Coding Journey', content: 'I learned to solve problems by repairing electronics at a small workshop. Building websites gave me a new way to apply that curiosity and connect with other Kenyan developers.', author: 5, tags: [0, 4, 6], published: true, daysAgo: 73 },
  { title: 'Building a REST API with Node.js and Prisma', content: 'A clean API starts with routes that have a clear responsibility and input that is validated early. Prisma makes common database operations readable while keeping the data model close to the code.', author: 6, tags: [2, 3, 5], published: true, daysAgo: 70 },
  { title: 'What I Learned at My First Nairobi Tech Meetup', content: 'I arrived expecting a series of talks and left with practical advice from people working on real products. Asking questions after the presentations made it easier to turn a meetup into lasting connections.', author: 7, tags: [4, 6], published: true, daysAgo: 67 },
  { title: 'Making Mobile Websites Work on Kenyan Networks', content: 'A fast mobile experience matters when a customer is browsing on a limited data bundle. Compressing images and avoiding unnecessary requests can make a noticeable difference.', author: 8, tags: [0, 1, 6], published: true, daysAgo: 64 },
  { title: 'Choosing Your First JavaScript Framework', content: 'The best framework for a beginner is usually the one that helps them finish a useful project. Learn the language fundamentals first, then compare tools against the needs of that project.', author: 9, tags: [0, 1, 5], published: true, daysAgo: 61 },
  { title: 'A Practical Guide to Prisma Migrations', content: 'Migrations give a team a shared record of how its database changed over time. Review generated SQL and test changes against a local database before applying them to production.', author: 0, tags: [3, 5], published: true, daysAgo: 58 },
  { title: 'Finding Your First Developer Role in Kenya', content: 'A small portfolio with finished projects can tell employers more than a long list of unfinished tutorials. Ask for feedback from local developer communities and tailor each application to the role.', author: 1, tags: [4, 6], published: true, daysAgo: 55 },
  { title: 'What M-Pesa Taught Me About Product Design', content: 'Products that work across different devices and levels of connectivity earn trust by being predictable. Clear confirmations and helpful recovery paths are just as important as a polished interface.', author: 2, tags: [4, 6], published: true, daysAgo: 52 },
  { title: 'Writing Useful Tests for a React Form', content: 'A good form test checks what a person can see and do rather than how a component is implemented internally. Covering validation and submission errors helps prevent frustrating regressions.', author: 3, tags: [1, 5], published: true, daysAgo: 49 },
  { title: 'Using Data to Improve Smallholder Farming', content: 'Weather forecasts and market information can help farmers make decisions when the data is timely and easy to understand. Technology works best when it complements local knowledge instead of replacing it.', author: 4, tags: [6, 7], published: true, daysAgo: 46 },
  { title: 'Shipping a Node.js App with Confidence', content: 'A repeatable deployment process makes it easier to spot problems before users do. Start with environment checks, a health endpoint, and logs that help the team understand failures.', author: 5, tags: [2, 5], published: true, daysAgo: 43 },
  { title: 'Why Database Indexes Matter for Your App', content: 'Indexes can make frequent lookups much faster, but every index also has a cost when records change. Measure your real queries and add indexes to support the access patterns you actually use.', author: 6, tags: [3, 5], published: true, daysAgo: 40 },
  { title: 'Remote Work Lessons from a Kisumu Developer', content: 'Remote work takes more than a laptop and a video call link. Agreeing on working hours, writing down decisions, and planning around connectivity make distributed teams more effective.', author: 7, tags: [4, 6], published: true, daysAgo: 37 },
  { title: 'Designing Accessible Interfaces for Everyone', content: 'Accessible interfaces make websites easier to use for people with different abilities and devices. Keyboard navigation, readable contrast, and descriptive labels are good places to start.', author: 8, tags: [1, 5], published: true, daysAgo: 34 },
  { title: 'Can AI Help Kenyan Students Learn to Code?', content: 'AI assistants can explain unfamiliar errors and suggest exercises at a learner’s pace. Students still benefit from checking the answers, practicing fundamentals, and discussing solutions with peers.', author: 9, tags: [6, 7], published: true, daysAgo: 31 },
  { title: 'Building a Personal Portfolio That Gets Noticed', content: 'A portfolio is strongest when it explains the problem behind each project and the decisions you made. Include a live demo or clear screenshots so visitors can understand the finished work quickly.', author: 0, tags: [0, 4], published: true, daysAgo: 28 },
  { title: 'Getting Started with React Hooks', content: 'Hooks let function components manage state and reuse behavior without class components. Begin with useState and useEffect, then learn when a custom hook makes repeated logic clearer.', author: 1, tags: [1, 5], published: true, daysAgo: 24 },
  { title: 'How Nairobi Teams Can Build for the Whole Region', content: 'A product designed for one city may need to adapt to different languages, devices, and payment habits elsewhere. Talking with users across the region early can reveal those needs before launch.', author: 2, tags: [6, 4], published: true, daysAgo: 19 },
  { title: 'Keeping Secrets Out of Your Node.js Repository', content: 'API keys and database credentials should live outside source control. Use environment variables, rotate exposed credentials quickly, and check repository history before publishing a project.', author: 3, tags: [2, 5], published: true, daysAgo: 12 },
  { title: 'A Beginner’s Notes on Prompting AI Tools', content: 'Specific context and a clear goal usually produce more useful AI responses. Treat the output as a draft, verify important claims, and avoid sharing private information with tools you do not trust.', author: 4, tags: [7, 5], published: true, daysAgo: 4 },
  { title: 'Planning a Community Coding Workshop in Nakuru', content: 'A welcoming workshop gives beginners time to ask questions and practice with help nearby. Keep the first project small and make sure participants can access the tools after the session ends.', author: 5, tags: [4, 6], published: false, daysAgo: 80 },
  { title: 'My Notes on Learning PostgreSQL Relationships', content: 'Relational databases help represent how real records connect to one another. Practicing one-to-many and many-to-many relationships makes it easier to model features before writing queries.', author: 6, tags: [3, 5], published: false, daysAgo: 60 },
  { title: 'Improving a Slow Landing Page on Mobile', content: 'A slow page can make visitors leave before they see what a business offers. Measuring the biggest assets first helps you focus on changes that improve loading time on real phones.', author: 7, tags: [0, 1], published: false, daysAgo: 35 },
  { title: 'The Habits That Helped Me Grow as a Developer', content: 'Progress came from finishing small projects and revisiting the code after I learned something new. Sharing what I learned with others also helped me find gaps in my understanding.', author: 8, tags: [4, 6], published: false, daysAgo: 18 },
  { title: 'Exploring Responsible AI for Local Languages', content: 'Language technology can make digital services more welcoming when it reflects the words people actually use. Community review and consent are important parts of building those tools responsibly.', author: 9, tags: [6, 7], published: false, daysAgo: 2 },
];

const categories = [
  { name: 'Electronics', description: 'Phones, laptops, and accessories' },
  { name: 'Clothing', description: 'Fashion and apparel' },
  { name: 'Food & Groceries', description: 'Fresh produce and packaged food' },
  { name: 'Home & Kitchen', description: 'Household items and kitchen equipment' },
  { name: 'Books & Stationery', description: 'Books, notebooks, and office supplies' },
];

const products = [
  { name: 'Samsung Galaxy A14', price: 18500, stock: 25, category: 0 },
  { name: 'Tecno Spark 20', price: 14000, stock: 30, category: 0 },
  { name: 'HP Laptop 15', price: 65000, stock: 10, category: 0 },
  { name: 'Oraimo Earbuds', price: 2500, stock: 50, category: 0 },
  { name: 'USB-C Fast Charger', price: 1800, stock: 0, category: 0 },
  { name: 'Ankara Print Shirt', price: 1200, stock: 30, category: 1 },
  { name: 'Maasai Shuka Scarf', price: 800, stock: 45, category: 1 },
  { name: 'Leather Sandals', price: 2200, stock: 18, category: 1 },
  { name: 'Kitenge Tote Bag', price: 950, stock: 0, category: 1 },
  { name: 'Cotton Hoodie', price: 2800, stock: 12, category: 1 },
  { name: 'Jogoo Maize Flour 2kg', price: 180, stock: 100, category: 2 },
  { name: 'Brookside Milk 500ml', price: 65, stock: 200, category: 2 },
  { name: 'Kenyan Arabica Coffee 250g', price: 650, stock: 40, category: 2 },
  { name: 'Pure Honey 500g', price: 750, stock: 0, category: 2 },
  { name: 'Unga wa Ndengu 1kg', price: 240, stock: 60, category: 2 },
  { name: 'Aluminium Sufuria Set', price: 4500, stock: 15, category: 3 },
  { name: 'Mwiko (Wooden Spoon)', price: 150, stock: 80, category: 3 },
  { name: 'Charcoal Jiko', price: 1800, stock: 22, category: 3 },
  { name: 'Weep Not Child - Ngugi', price: 950, stock: 20, category: 4 },
  { name: 'A4 Counter Book', price: 120, stock: 100, category: 4 },
];

const orders = [
  { user: 0, status: 'delivered', daysAgo: 70, items: [[0, 1], [3, 2], [19, 3]] },
  { user: 1, status: 'delivered', daysAgo: 65, items: [[10, 4], [11, 6], [19, 2]] },
  { user: 2, status: 'delivered', daysAgo: 60, items: [[5, 1], [6, 2]] },
  { user: 3, status: 'delivered', daysAgo: 55, items: [[18, 1], [19, 5], [16, 2]] },
  { user: 4, status: 'delivered', daysAgo: 50, items: [[1, 1], [12, 2]] },
  { user: 5, status: 'shipped', daysAgo: 12, items: [[2, 1], [3, 1], [6, 1]] },
  { user: 6, status: 'shipped', daysAgo: 10, items: [[15, 1], [16, 3]] },
  { user: 7, status: 'shipped', daysAgo: 8, items: [[10, 5], [14, 2], [19, 4]] },
  { user: 8, status: 'shipped', daysAgo: 6, items: [[7, 1], [18, 2]] },
  { user: 9, status: 'pending', daysAgo: 3, items: [[0, 1], [5, 2], [19, 3]] },
  { user: 0, status: 'pending', daysAgo: 2, items: [[11, 4], [16, 2]] },
  { user: 2, status: 'pending', daysAgo: 1, items: [[12, 1], [14, 3], [18, 1]] },
  { user: 4, status: 'pending', daysAgo: 1, items: [[1, 1], [6, 1]] },
  { user: 6, status: 'cancelled', daysAgo: 20, items: [[2, 1], [8, 1], [19, 2]] },
  { user: 8, status: 'cancelled', daysAgo: 15, items: [[15, 1], [10, 3]] },
];

const commentTexts = [
  'This is a helpful explanation, especially for developers just getting started.',
  'I ran into the same challenge on a project in Mombasa. These suggestions made a real difference.',
  'Thanks for sharing the practical details. I am going to try this approach on my next build.',
  'The examples make this much easier to understand than the documentation alone.',
  'Great point about testing with real users before adding more features.',
  'I appreciate the local context here. It is useful to see these ideas applied in Kenya.',
  'Could you share more about how you handled the first version? This was a good read.',
  'We used a similar idea with our small team and it saved us a lot of time.',
  'Clear and useful advice. I will share this with the other developers on my team.',
  'The reminder to keep the solution simple is easy to overlook. Thanks for the post.',
];

function daysAgoDate(daysAgo) {
  return new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);
}

async function main() {
  console.log('Seeding database...');

  await prisma.comment.deleteMany();
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.post.deleteMany();
  await prisma.product.deleteMany();
  await prisma.tag.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();
  console.log('Cleared existing data.');

  await prisma.user.createMany({ data: users });
  const createdUsers = await prisma.user.findMany({ orderBy: { email: 'asc' } });
  console.log(`Created ${createdUsers.length} users.`);

  await prisma.tag.createMany({ data: tagNames.map((name) => ({ name })) });
  const createdTags = await prisma.tag.findMany();
  const tagsByName = new Map(createdTags.map((tag) => [tag.name, tag]));
  console.log(`Created ${createdTags.length} tags.`);

  const createdPosts = [];
  for (const post of posts) {
    const createdPost = await prisma.post.create({
      data: {
        title: post.title,
        content: post.content,
        published: post.published,
        likes: Math.floor(Math.random() * 101),
        createdAt: daysAgoDate(post.daysAgo),
        authorId: createdUsers[post.author].id,
        tags: {
          connect: post.tags.map((tagIndex) => ({ id: tagsByName.get(tagNames[tagIndex]).id })),
        },
      },
    });
    createdPosts.push(createdPost);
  }
  const publishedCount = posts.filter((post) => post.published).length;
  console.log(`Created ${createdPosts.length} posts (${publishedCount} published, ${createdPosts.length - publishedCount} drafts).`);

  for (let postIndex = 0; postIndex < createdPosts.length; postIndex += 1) {
    const post = posts[postIndex];
    if (!post.published) continue;

    for (let commentIndex = 0; commentIndex < 2; commentIndex += 1) {
      const commenterIndex = (post.author + commentIndex + 1) % createdUsers.length;
      const textIndex = (postIndex * 2 + commentIndex) % commentTexts.length;
      await prisma.comment.create({
        data: {
          content: commentTexts[textIndex],
          postId: createdPosts[postIndex].id,
          authorId: createdUsers[commenterIndex].id,
          createdAt: daysAgoDate(Math.max(0, post.daysAgo - 1)),
        },
      });
    }
  }
  const commentCount = await prisma.comment.count();
  console.log(`Created ${commentCount} comments.`);
  console.log('\nBlog seeding complete!');
  console.log(`  Users: ${createdUsers.length}`);
  console.log(`  Posts: ${createdPosts.length}`);
  console.log(`  Comments: ${commentCount}`);
  console.log(`  Tags: ${createdTags.length}`);

  console.log('\nE-commerce seeding...');
  await prisma.category.createMany({ data: categories });
  const createdCategories = await prisma.category.findMany();
  console.log(`Created ${createdCategories.length} categories.`);

  const categoriesByName = new Map(createdCategories.map((category) => [category.name, category]));
  await prisma.product.createMany({
    data: products.map((product) => ({
      name: product.name,
      price: product.price,
      stock: product.stock,
      rating: (1 + Math.random() * 4).toFixed(1),
      categoryId: categoriesByName.get(categories[product.category].name).id,
    })),
  });
  const createdProducts = await prisma.product.findMany({ orderBy: { name: 'asc' } });
  const productsByName = new Map(createdProducts.map((product) => [product.name, product]));
  console.log(`Created ${createdProducts.length} products.`);

  const phoneUpdates = await Promise.all(
    users.map((user) => prisma.user.update({
      where: { email: user.email },
      data: { bio: user.bio },
    })),
  );
  console.log(`Updated ${phoneUpdates.length} users with phone info.`);

  let orderItemCount = 0;
  for (const order of orders) {
    const orderItems = order.items.map(([productIndex, quantity]) => ({
      product: products[productIndex],
      quantity,
    }));
    const total = orderItems.reduce(
      (sum, item) => sum + item.product.price * item.quantity,
      0,
    );

    await prisma.order.create({
      data: {
        status: order.status,
        total,
        createdAt: daysAgoDate(order.daysAgo),
        userId: createdUsers[order.user].id,
        items: {
          create: orderItems.map((item) => ({
            quantity: item.quantity,
            priceAtPurchase: item.product.price,
            productId: productsByName.get(item.product.name).id,
          })),
        },
      },
    });
    orderItemCount += orderItems.length;
  }
  console.log(`Created ${orders.length} orders with items.`);
  console.log('\nE-commerce seeding complete!');
  console.log(`  Categories: ${createdCategories.length}`);
  console.log(`  Products: ${createdProducts.length}`);
  console.log(`  Orders: ${orders.length}`);
  console.log(`  Order Items: ${orderItemCount}`);
  console.log('\nFull seed complete!');
}

main()
  .catch((error) => {
    console.error('Seeding failed:', error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
