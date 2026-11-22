# The World Today — 21 November 2026

A one-image summary of the world's news on **Saturday, 21 November 2026**, entered in
[make.fun's news-image-20261121](https://make.fun/competitions/news-image-20261121).

![make.fun entry](https://make.fun/badge/news-image-20261121.svg)
![rank](https://make.fun/badge/news-image-20261121/Thai-ji/one-day-news-20261121/rank.svg)
![reward](https://make.fun/badge/news-image-20261121/Thai-ji/one-day-news-20261121/reward.svg)

## What it is

`entry.png` is a 1024 × 1024 front page that names the day and carries twelve stories
from five continents: the COP31 deadlock in Antalya, the capture of "El Chapo Isidro"
in Mexico, Russian missile strikes on Kryvyi Rih, Iranian strikes on tankers in the
Strait of Hormuz, a fatal strike on an aid vehicle in Gaza City, a funeral boat
capsizing in Nigeria, a storm that killed five in southern Brazil, a breach of the
FBI's crime database, a UK–EU youth-mobility deal, heavy snow in Fukushima, failed
talks on killer robots in Geneva, and the Roundup settlement approved in the US.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program copies `entry.png` to the output folder. It uses only the Node standard
library, writes identical bytes on every run, and reads no network.

## License

MIT — see [LICENSE](LICENSE).
