# Missing import in generated declaration file

Reproduces with TypeScript 4.6 ~ 4.8.0-dev (4.5 and below not tested).

## Step to reproduce

1.  Build.

    ```sh
    yarn
    yarn tsc --build src/b
    ```

2.  Open `bld/b/index.d.ts`:

    <!-- prettier-ignore -->
    ```ts
    export declare const timestamp: number & {
        [__nominalType]: unknown;
    //   ~~~~~~~~~~~~~ Cannot find name '__nominalType'.
    } & {
        [__nominal]: {
    //   ~~~~~~~~~ Cannot find name '__nominal'.
            timestamp: true;
        };
    } & {
        [__nominalType]: number;
    //   ~~~~~~~~~~~~~ Cannot find name '__nominalType'.
    };
    ```

## Workaround

3.  Edit `src/b/index.ts` and add explicit import:

    ```ts
    import * as x from "x-value";
    ```

4.  Build.

    ```sh
    yarn tsc --build src/b
    ```

    And now the generated declaration file is correct:

    <!-- prettier-ignore -->
    ```ts
    import * as x from "x-value";
    export declare const timestamp: number & {
        [x.__nominalType]: unknown;
    } & {
        [x.__nominal]: {
            timestamp: true;
        };
    } & {
        [x.__nominalType]: number;
    };
    ```
