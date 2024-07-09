import { base } from '@freesewing/brian'

export const front = {
  name: 'bernie.front',
  from: base,
  draft: ({ sa, Point, points, Path, paths, part, measurements }) => {
    points.test1 = new Point(0, 0)
    points.test2 = points.test1.shift(0, 100)

    paths.test = new Path().move(points.test1).line(points.test2)

    return part
  },
}
