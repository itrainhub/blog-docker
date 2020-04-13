FROM isaac/jekyll:1.0

MAINTAINER isaac

ARG build_command
ENV BUILD_COMMAND ${build_command}

CMD sh -c ${BUILD_COMMAND}
