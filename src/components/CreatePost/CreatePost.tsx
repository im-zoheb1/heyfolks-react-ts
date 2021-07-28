import React from 'react';

import Card from 'components/UI/Card';
import CardBody from 'components/UI/Card/CardBody';
import CardFooter from 'components/UI/Card/CardFooter';
import Button from 'components/UI/Button';

import { CreatePost } from './CreatePost.element';
import { CreatePostMessage } from './CreatePost.element';
import { CreatePostFooter } from './CreatePost.element';

const CreatePostCard: React.FC = () => {
  const placeholder: string = "What's on your mind?";
  const rows: number = 4;
  return (
    <CreatePost>
      <Card>
        <CardBody>
          <CreatePostMessage rows={rows} placeholder={placeholder}></CreatePostMessage>
        </CardBody>
        <CardFooter>
          <CreatePostFooter>
            <Button size="sm">Create Post</Button>
          </CreatePostFooter>
        </CardFooter>
      </Card>
    </CreatePost>
  );
};
export default CreatePostCard;
