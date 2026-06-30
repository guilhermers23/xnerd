import { useState } from 'react';
import { LuImageUp } from 'react-icons/lu';

import {
  useAddPostMutation,
  useAddCommentsMutation
} from '../../services/Post.Service';
import { useGetMeQuery } from '../../services/Users.Service';
import { ResponseError } from '../../utils/ultilsFuction';
import { ToastEmitter } from '../toastify';

//import { useFileUpload } from './fuctionsCreatePost';

import { colors } from '../../styles/theme';
import { ProfileIcon } from '../profileIcon';
import { Button, Container } from '../../styles/GlobalStyles';
import * as Style from './CreatePostStyled';
import { FloatingInput } from '../input';
import { Modal } from '../modal';

type Props = {
  placeholder: string;
  titleButton: string;
  postID?: number | string;
};

export const CreatePost = ({ placeholder, titleButton, postID }: Props) => {
  const { data: user } = useGetMeQuery();
  const [makePost] = useAddPostMutation();
  const [addComment] = useAddCommentsMutation();

  const [content, setContent] = useState('');
  const [midia, setMidia] = useState('');
  const [openModal, setOpenModal] = useState(false);
  //const { file, preview, onChangeFile, clearPost } = useFileUpload();
  const isDisabled = content.trim().length < 3;

  const publishPost = async () => {
    if (content.trim().length < 3) {
      ToastEmitter('Campo deve possuir no mínimo 3 caracteres.', 'warning');
      return;
    }

    const payload: Partial<IPost> & { midia_url?: string } = {
      content: content
    };

    if (midia) {
      payload.midia_url = midia;
    }

    try {
      if (postID) {
        // Se postID existe, é um comentário
        await addComment({ postID, body: payload }).unwrap();
      } else {
        // Caso contrário, é um post normal
        await makePost(payload).unwrap();
        ToastEmitter('Postagem realizada com sucesso!', 'sucess');
      }
      setContent('');
      setMidia('');
    } catch (error) {
      ResponseError(error, 'Ocorreu um erro no processamento!');
    }
  };

  return (
    <Container>
      <Style.Card>
        <ProfileIcon urlImage={user?.profile_image ?? ''} />
        <Style.Input
          name="content"
          id="content"
          placeholder={placeholder}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </Style.Card>

      {midia && (
        <Style.Preview>
          <Style.Close
            src="/close.png"
            alt="Close"
            onClick={() => setMidia('')}
          />
          <Style.PreviewFile src={midia} alt="Preview do arquivo" />
        </Style.Preview>
      )}

      <Style.ListIcons>
        <span>
          <a onClick={() => setOpenModal(!openModal)}>
            <LuImageUp
              size={25}
              color={colors.info}
              cursor="pointer"
              title="Selecionar uma imagem"
            />
          </a>

          <Modal
            isOpen={openModal}
            onClose={() => setOpenModal(false)}
            title="Adicionar mídia"
          >
              <FloatingInput
                label="Link para postagem de mídia"
                id="cover"
                type="text"
                value={midia}
                onChange={(e) => setMidia(e.target.value)}
              />
          </Modal>
        </span>

        <Button onClick={publishPost} disabled={isDisabled}>
          {titleButton}
        </Button>
      </Style.ListIcons>
    </Container>
  );
};
