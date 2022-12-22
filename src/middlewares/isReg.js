import { Initiative } from '../../db/models';

async function checkUser(req, res, next) {
  const { id } = req.params;
  const currPost = await Initiative.findByPk(id);
  if (currPost?.userId === req.session.user?.id) return next();
  return res.sendStatus(401);
}

export default checkUser;
