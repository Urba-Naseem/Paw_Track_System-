FROM nginx:alpine

# Delete default Nginx HTML files
RUN rm -rf /usr/share/nginx/html/*

# Copy all frontend files into the web root
COPY . /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]