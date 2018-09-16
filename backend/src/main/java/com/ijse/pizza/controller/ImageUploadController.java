package com.ijse.pizza.controller;
//import org.apache.commons.io.IOUtils;

import org.apache.commons.io.IOUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpServletRequest;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.StandardCopyOption;

@RestController
@RequestMapping("api/v1/upload")
@CrossOrigin
public class ImageUploadController {

    //    private static String UPLOAD_DIR = "WEB-INF/images";
    private static String UPLOAD_DIR = "images";

    @PostMapping("/user/{name}")
    public String uploadCustomerPhoto(@RequestParam("file") MultipartFile file, @PathVariable("name") String email, HttpServletRequest request) {
        System.out.println("okkk*****");
        System.out.println(email);
        try {

            String orgFileName = file.getOriginalFilename();
            String path = request.getServletContext().getRealPath("") + UPLOAD_DIR + "/users" + File.separator + email + ".jpg";
            InputStream inputStream = file.getInputStream();

            saveFile(inputStream, path);
            return email;

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    @PostMapping("/item/{name}")
    public String uploadItemPhoto(@RequestParam("file") MultipartFile file, @PathVariable("name") String name, HttpServletRequest request) {

        try {

            String orgFileName = file.getOriginalFilename();
            String path = request.getServletContext().getRealPath("") + UPLOAD_DIR + "/items" + File.separator + name + ".jpg";
            InputStream inputStream = file.getInputStream();

            saveFile(inputStream, path);
            return name;

        } catch (Exception e) {
            e.printStackTrace();
            throw new RuntimeException(e);
        }
    }

    private void saveFile(InputStream inputStream, String path) {

        File targetFile = new File(path);

        try {
            java.nio.file.Files.copy(
                    inputStream,
                    targetFile.toPath(),
                    StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
        }


        IOUtils.closeQuietly(inputStream);
    }
}