import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './PostCard.module.scss';

const PostCard = ({ category, date, image, title, tags }) => {
  const defaultImage = '/favicon.png';

  return (
    <div className={styles.post_card}>
      <div className={styles.post_card_header}>
        <span className={styles.post_card_category}>{category}</span>
        <span className={styles.post_card_date}>{date}</span>
      </div>
      <Image
        className={styles.post_card_image}
        src={image || defaultImage}
        alt={`image of ${title}`}
        width={300}
        height={186}
      />
      <h3 className={styles.post_card_title}>{title}</h3>
      <div className={styles.post_card_tags}>
        {tags.map((tag, index) => (
          <button key={index} className={styles.post_card_tag}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

PostCard.propTypes = {
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string,
  title: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
};

PostCard.defaultProps = {
  tags: [],
};

const dummyPosts = [
  {
    category: 'Tech',
    date: '2024-10-24',
    image: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Understanding React Hooks: A Comprehensive Guide',
    tags: ['React', 'JavaScript', 'Hooks'],
  },
  {
    category: 'Lifestyle',
    date: '2024-10-23',
    image: '',
    title: '10 Tips for a Better Work-Life Balance',
    tags: ['Life', 'Balance', 'Tips'],
  },
];

const PostCardsList = () => {
  return (
    <div>
      {dummyPosts.map((post, index) => (
        <PostCard
          key={index}
          category={post.category}
          date={post.date}
          image={post.image}
          title={post.title}
          tags={post.tags}
        />
      ))}
    </div>
  );
};

export default PostCardsList;
