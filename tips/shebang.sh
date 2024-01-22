Use #!/usr/bin/env bash instead of #!/bin/bash.

The former searches the user's PATH to find the bash binary.
The latter assumes it is always installed to /bin/ which can cause issues.
NOTE: There are times when one may have a good reason for using #!/bin/bash or another direct path to the binary.

# Right:

    #!/usr/bin/env bash

# Less right:

    #!/bin/bash
