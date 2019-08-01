import React from "react";
import { Link } from "gatsby";
import { css, Styled } from "theme-ui";
import Bio from "../components/bio";

const rootPath = `${__PATH_PREFIX__}/`;

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Styled.h1
        css={css({
          my: 0,
          fontSize: 4
        })}
      >
        <Styled.a
          as={Link}
          css={{
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`
          }}
          to={`/`}
        >
          {children}
        </Styled.a>
      </Styled.h1>
    );
  } else {
    return null;
  }
};

export default ({ children, title, ...props }) => {
  return (
    <header>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `baseline`,
            mb: 4
          })}
        >
          <Title {...props}>{title}</Title>
          {children}
        </div>
        {props.location.pathname === rootPath && <Bio />}
      </div>
    </header>
  );
};
