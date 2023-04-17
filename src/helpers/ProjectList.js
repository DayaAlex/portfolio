
import ErrDigit from '../assets/wrongdigit.png'
import or_perceptron from '../assets/OR_gate_perceptron.png'
import mle_mean from '../assets/MLE_mean.png'
import obj_loc from '../assets/CV-obj-localisation.png'
import mle_var from '../assets/MLE_variance.png'
import person_re from '../assets/CV-person-reidentification.png'
export const ProjectList=[

    {
        name: "Recognising missclasified MNIST digits using SVM",
        image: ErrDigit, 
        skills: 'Python, Pandas, Sklearn, GoogleColab',
    },

    {
        name: "CV: Person Re-identification using Siamese Nueral Network",
        image:  person_re,
        skills: 'PyTorch, Timm,Skimage, GoogleColab',
    },

    {
        name: "CV: Object Localisation using EfficientNet-b0",
        image:  obj_loc,
        skills: 'Pytorch, Albumentations,OpenCV, GoogleColab ',
    },

    {
        name: "OR-gate implementation for 3 inputs using perceptron",
        image:  or_perceptron,
        skills: 'Python, VSCode',
    },

    {
        name: "Maximum Likelihood Estimate",
        image:  mle_mean,mle_var,
        skills: 'Python, Sublime,Scipy.stats',
    },



] 