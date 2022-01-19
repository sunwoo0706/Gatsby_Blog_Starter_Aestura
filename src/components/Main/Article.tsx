import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Link } from 'gatsby';

interface ArticleProps {
  title: string;
  summary: string;
  date: string;
  link: string;
}

const Container = styled.article`
  width: inherit;
  &:hover {
    cursor: pointer;
    & > h2 {
      transition: color 0.4s ease;
      color: #0b409c;
    }
  }
`;

const H2Style = css`
  width: inherit;
  margin-bottom: 1.4rem;
  font-weight: 600;
  font-size: 2rem;
`;

const PreviewStyle = css`
  width: inherit;
  height: fit-content;
  margin-bottom: 1.4rem;
  font-weight: 400;
  font-size: 1.1rem;
  color: #240c3d;
`;

const DateStyle = css`
  font-weight: 400;
  font-size: 0.875rem;
  color: #646464;
`;

export const Article: React.FC<ArticleProps> = ({
  title,
  summary,
  date,
  link,
}) => {
  return (
    <Link to={link}>
      <Container>
        <h2 css={H2Style}>{title}</h2>
        <p css={PreviewStyle}>{summary}</p>
        <p css={DateStyle}>
          <time dateTime={date}>{date.replace(/-/g, '. ')}</time>
        </p>
      </Container>
    </Link>
  );
};
